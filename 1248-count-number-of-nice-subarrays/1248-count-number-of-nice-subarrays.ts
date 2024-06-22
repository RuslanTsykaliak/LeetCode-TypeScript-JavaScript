function numberOfSubarrays(nums: number[], k: number): number {
    let cnt = new Array(nums.length + 1).fill(0);
    let t = 0, result = 0;
    cnt[0] = 1;
    for (let v of nums) {
        t += v & 1;
        result += t - k >= 0 ? cnt[t - k] : 0;
        cnt[t]++;
    }
    return result;
};