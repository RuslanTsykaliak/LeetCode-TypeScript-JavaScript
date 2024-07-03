function minDifference(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let min = nums[nums.length - 1] - nums[0];

    if (nums.length <= 4) {
        return 0;
    }

    for (let i = 0; i <= 3; i++) {
        min = Math.min(min, nums[nums.length - (3 - i) - 1] - nums[i]);
    }
    return min;
};