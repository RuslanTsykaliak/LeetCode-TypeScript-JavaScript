function maxWidthRamp(nums: number[]): number {
    let stack: number[] = [];

    // Build a decreasing stack of indices
    for (let i = 0; i < nums.length; i += 1) {
        if (stack.length === 0 || nums[stack.at(-1)] > nums[i]) {
            stack.push(i);
        }
    }

    let ans: number = 0;

    // Traverse from the end of the array to calculate the maximum width ramp
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        while (stack.length > 0 && nums[i] >= nums[stack.at(-1)]) {
            const idx = stack.pop();
            ans = Math.max(ans, i - idx);
        }
    }

    return ans;
};