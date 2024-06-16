class SegmentTree {
    private tree: number[];
    private n: number;

    constructor(size: number) {
        this.n = size;
        this.tree = new Array(4 * size).fill(0);
    }

    private build(arr: number[], start: number, end: number, node: number): void {
        if (start == end) {
            this.tree[node] = arr[start];
            return;
        }
        const mid = Math.floor((start + end) / 2);
        this.build(arr, start, mid, 2 * node + 1);
        this.build(arr, mid + 1, end, 2 * node + 2);
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }

    buildTree(arr: number[]): void {
        this.build(arr, 0, this.n - 1, 0);
    }

    private updateUtil(start: number, end: number, idx: number, value: number, node: number): void {
        if (start == end) {
            this.tree[node] = value;
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (idx <= mid) {
            this.updateUtil(start, mid, idx, value, 2 * node + 1);
        } else {
            this.updateUtil(mid + 1, end, idx, value, 2 * node + 2);
        }
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }

    update(idx: number, value: number): void {
        this.updateUtil(0, this.n - 1, idx, value, 0);
    }

    private queryUtil(start: number, end: number, l: number, r: number, node: number): number {
        if (r < start || l > end) {
            return 0;
        }
        if (l <= start && r >= end) {
            return this.tree[node];
        }
        const mid = Math.floor((start + end) / 2);
        const left = this.queryUtil(start, mid, l, r, 2 * node + 1);
        const right = this.queryUtil(mid + 1, end, l, r, 2 * node + 2);
        return left + right;
    }

    query(l: number, r: number): number {
        return this.queryUtil(0, this.n - 1, l, r, 0);
    }
}

function countOfPeaks(nums: number[], queries: number[][]): number[] {
    const n = nums.length;
    const peaks = new Array(n).fill(0);
    
    // Initialize the peaks array
    const isPeak = (i: number): boolean => {
        return i > 0 && i < n - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1];
    };
    
    for (let i = 1; i < n - 1; i++) {
        peaks[i] = isPeak(i) ? 1 : 0;
    }
    
    const segmentTree = new SegmentTree(n);
    segmentTree.buildTree(peaks);
    
    const results: number[] = [];
    
    for (const query of queries) {
        if (query[0] === 1) {
            // Count peaks in the subarray nums[li..ri]
            const [_, li, ri] = query;
            if (li === ri) {
                results.push(0);
            } else {
                results.push(segmentTree.query(li + 1, ri - 1));
            }
        } else if (query[0] === 2) {
            // Update nums[indexi] to vali
            const [_, indexi, vali] = query;
            nums[indexi] = vali;
            
            // Update the peaks and segment tree for indexi, indexi - 1, and indexi + 1
            for (let i of [indexi - 1, indexi, indexi + 1]) {
                if (i > 0 && i < n - 1) {
                    peaks[i] = isPeak(i) ? 1 : 0;
                    segmentTree.update(i, peaks[i]);
                }
            }
        }
    }
    
    return results;
}
