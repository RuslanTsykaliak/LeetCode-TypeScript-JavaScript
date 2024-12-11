function maximumBeauty(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let max = nums[0] + 2 * k;

    let counter = 0;
    for (let start = 0, end = 0; end < nums.length; end++) {
        let endNum = nums[end];
        while (endNum > max) {
            start++;
            max = nums[start] + 2 * k;
        }
        counter = Math.max(counter, (end - start + 1));
    }

    return counter;
};