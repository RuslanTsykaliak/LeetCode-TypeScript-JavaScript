function countOfPeaks(nums, queries) {
    const n = nums.length;
    const peaks = new Array(n).fill(0);

    const isPeak = (i) => i > 0 && i < n - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1];

    for (let i = 1; i < n - 1; i++) {
        peaks[i] = isPeak(i) ? 1 : 0;
    }

    const buildSegmentTree = (arr) => {
        const tree = new Array(4 * n).fill(0);
        const build = (start, end, node) => {
            if (start === end) {
                tree[node] = arr[start];
                return;
            }
            const mid = Math.floor((start + end) / 2);
            build(start, mid, 2 * node + 1);
            build(mid + 1, end, 2 * node + 2);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        };
        build(0, n - 1, 0);
        return tree;
    };

    const updateSegmentTree = (tree, idx, value, start = 0, end = n - 1, node = 0) => {
        if (start === end) {
            tree[node] = value;
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (idx <= mid) {
            updateSegmentTree(tree, idx, value, start, mid, 2 * node + 1);
        } else {
            updateSegmentTree(tree, idx, value, mid + 1, end, 2 * node + 2);
        }
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    };

    const querySegmentTree = (tree, l, r, start = 0, end = n - 1, node = 0) => {
        if (r < start || l > end) return 0;
        if (l <= start && r >= end) return tree[node];
        const mid = Math.floor((start + end) / 2);
        return querySegmentTree(tree, l, r, start, mid, 2 * node + 1) + querySegmentTree(tree, l, r, mid + 1, end, 2 * node + 2);
    };

    const segmentTree = buildSegmentTree(peaks);

    const results = [];

    for (const query of queries) {
        if (query[0] === 1) {
            const [_, li, ri] = query;
            results.push(li === ri ? 0 : querySegmentTree(segmentTree, li + 1, ri - 1));
        } else if (query[0] === 2) {
            const [_, indexi, vali] = query;
            nums[indexi] = vali;
            for (let i of [indexi - 1, indexi, indexi + 1]) {
                if (i > 0 && i < n - 1) {
                    peaks[i] = isPeak(i) ? 1 : 0;
                    updateSegmentTree(segmentTree, i, peaks[i]);
                }
            }
        }
    }

    return results;
}
