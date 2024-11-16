function resultsArray(nums: number[], k: number): number[] {
    if (k === 1) {
        return nums;
    }

    const n: number = nums.length;
    const result: number[] = [];
    let left: number = 0;
    let right: number = 1;

    while (right < n) {
        const isNotConsecutive: boolean = nums[right] - nums[right - 1] !== 1;

        if (isNotConsecutive) {
            while (left < right && left + k - 1 < n) {
                result.push(-1);
                left++;
            }
            left = right;
        }
        else if (right - left === k - 1) {
            result.push(nums[right]);
            left++;
        }

        right++;
    }

    return result;
}