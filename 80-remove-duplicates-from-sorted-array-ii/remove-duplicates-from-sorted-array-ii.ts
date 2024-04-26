function removeDuplicates(nums: number[]): number {
    let prev = 0;
    let left = 1;
    let right = 2;
    let length = nums.length

    // short circuit if length 1 or 2
    if (length <= 2 ) {
        return nums.length
    }

    while (right < length) {
        if (nums[prev] !== nums[right]) {
            left++
            prev++
            nums[left] = nums[right]
        }

        right++
    }

    return left + 1
};