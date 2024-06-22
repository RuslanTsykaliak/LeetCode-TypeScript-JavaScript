function numberOfSubarrays(nums: number[], k: number): number {
    let cnt = new Array(nums.length + 1).fill(0);
    let total = 0, result = 0;
    cnt[0] = 1;

    for (let v of nums) {
        total += v & 1;
        result += total - k >= 0 ? cnt[total - k] : 0;
        cnt[total]++;
    }
    return result;
};