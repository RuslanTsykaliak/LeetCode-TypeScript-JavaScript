function rearrangeArray(nums: number[]): number[] {
  const results: number[] = [];
  const positive: number[] = [];
  const negative: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 0) positive.push(element);
    else negative.push(element);
  }

  for (let i = 0; i < nums.length / 2; i++) {
    results[2 * i] = positive[i];
    results[2 * i + 1] = negative[i];
  }

  return results;
}