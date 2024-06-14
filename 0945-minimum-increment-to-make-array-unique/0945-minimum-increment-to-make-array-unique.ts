function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let moves = 0, prev = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= prev) {
            moves += ++prev - nums[i];
        } else {
            prev = nums[i];
        }
    }
    return moves;
};