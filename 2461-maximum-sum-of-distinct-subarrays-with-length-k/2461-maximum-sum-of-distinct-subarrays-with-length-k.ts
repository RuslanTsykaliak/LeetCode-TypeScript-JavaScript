function maximumSubarraySum(nums: number[], k: number): number {
    const n: number = nums.length;
    const elements: Set<number> = new Set();
    let currentSum: number = 0;
    let maxSum: number = 0;
    let begin: number = 0;

    for (let end = 0; end < n; end++) {
        if (!elements.has(nums[end])) {
            currentSum += nums[end];
            elements.add(nums[end]);

            if (end - begin + 1 === k) {
                maxSum = Math.max(maxSum, currentSum);
                currentSum -= nums[begin];
                elements.delete(nums[begin]);
                begin++;
            }
        } else {
            while (nums[begin] !== nums[end]) {
                currentSum -= nums[begin];
                elements.delete(nums[begin]);
                begin++;
            }
            begin++;
        }
    }
    return maxSum;
}