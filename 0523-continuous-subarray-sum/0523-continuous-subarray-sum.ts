function checkSubarraySum(nums: number[], k: number): boolean {
  nums[0] %= k;

  const set = new Set([0]);
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
    nums[i] %= k;

    if (set.has(nums[i])) return true;

    set.add(nums[i - 1]);
  }

  return false;
}