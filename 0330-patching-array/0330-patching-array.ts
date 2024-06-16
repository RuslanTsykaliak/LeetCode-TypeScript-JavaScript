function minPatches(nums: number[], n: number): number {
    let x = 1, patches = 0, i = 0;
    while (x <= n) {
        if (i < nums.length && nums[i] <= x) x += nums[i++];
        else x += x, patches++;
    }
    return patches;
};