function longestSubarray(nums: number[], limit: number): number {
    let minDeque = [], maxDeque = [], left = 0, maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        while (minDeque.length && nums[i] < minDeque[minDeque.length - 1]) {
            minDeque.pop();
        }
        minDeque.push(nums[i]);

        while (maxDeque.length && nums[i] > maxDeque[maxDeque.length - 1]) {
            maxDeque.pop();
        }
        maxDeque.push(nums[i]);

        while (maxDeque[0] - minDeque[0] > limit) {
            if (nums[left] === maxDeque[0]) {
                maxDeque.shift();
            }
            if (nums[left] === minDeque[0]) {
                minDeque.shift();
            }
            left++
        }
        maxLen = Math.max(maxLen, i - left + 1);
    }
    return maxLen;
};