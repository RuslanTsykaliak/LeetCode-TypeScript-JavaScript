function numberOfSubarrays(nums: number[], k: number): number {
    let cnt = new Array(nums.length + 1).fill(0);
    let t = 0, ans = 0;
    cnt[0] = 1;
    for (let v of nums) {
        t += v & 1;
        ans += t - k >= 0 ? cnt[t - k] : 0;
        cnt[t]++;
    }
    return ans;
};