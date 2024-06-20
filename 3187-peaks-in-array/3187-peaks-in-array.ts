function countOfPeaks(nums: number[], queries: number[][]): number[] {
    // Helper function to check if an element at index i in nums is a peak. A peak is an element that is greater than its previous and next element.
    const isPeak = (i: number): boolean => i > 0 && i < nums.length - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1];

    // Initialize an empty array to store the indices of the peak elements in nums.
    const peaks: number[] = [];

    // Loop through the nums array from the second element to the second last element. If an element is a peak, its index is added to the peaks array.
    for (let i = 1; i < nums.length - 1; i++) {
        if (isPeak(i)) peaks.push(i);
    }

    // Sort the peaks array in ascending order.
    peaks.sort((a, b) => a - b);

    // Helper function to perform binary search on a sorted array arr to find the leftmost position of a value x.
    const bisectLeft = (arr: number[], x: number): number => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    // Helper function to perform binary search on a sorted array arr to find the rightmost position of a value x.
    const bisectRight = (arr: number[], x: number): number => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] <= x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    // Initialize an empty array to store the results of the queries of the first type.
    const res: number[] = [];

    // Process each query in queries. If the query is of the first type, calculate the number of peaks in the specified subarray. If the query is of the second type, update the nums array and the peaks array accordingly.
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
    // Return the res array which contains the results of the queries of the first type.
    return res;
}