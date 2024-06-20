/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var countOfPeaks = function (nums, queries) {
    const isPeak = (i) => i > 0 && i < nums.length - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1];
    const peaks = [];

    for (let i = 1; i < nums.length - 1; i++) {
        if (isPeak(i)) peaks.push(i);
    }

    peaks.sort((a, b) => a - b);

    const bisectLeft = (arr, x) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    const bisectRight = (arr, x) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] <= x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    const res = [];

    for (const q of queries) {
        if (q[0] === 1) {
            const [_, li, ri] = q;
            const j1 = bisectRight(peaks, li);
            const j2 = bisectLeft(peaks, ri) - 1;
            res.push(Math.max(j2 - j1 + 1, 0));
        } else {
            const [_, i, v] = q;
            const wasPeak = [isPeak(i - 1), isPeak(i), isPeak(i + 1)];
            nums[i] = v;
            for (let p = -1; p <= 1; p++) {
                const idx = i + p;
                const nowPeak = isPeak(idx);
                const peakIndex = bisectLeft(peaks, idx);
                if (nowPeak && !wasPeak[p + 1]) peaks.splice(peakIndex, 0, idx);
                else if (!nowPeak && wasPeak[p + 1] && peakIndex < peaks.length && peaks[peakIndex] === idx) peaks.splice(peakIndex, 1);
            }
        }
    }
    return res;
};