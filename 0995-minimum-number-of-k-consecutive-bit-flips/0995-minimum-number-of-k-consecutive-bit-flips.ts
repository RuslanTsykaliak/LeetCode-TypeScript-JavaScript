function minKBitFlips(nums: number[], k: number): number {
    let flip = 0, flips = 0, isFlipped = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++, flip ^= isFlipped[i - k] || 0) {
        if ((flip % 2) == nums[i]) {
            if (i + k > nums.length) return - 1;
            else flips++, flip ^= 1, isFlipped[i] = 1;
        }
    }
    return flips;
};