function missingNumber(nums: number[]): number {
    let expectedSum = nums.length*(nums.length + 1)/2
    let actualSum = 0
    for (let num of nums) {
        actualSum += num
    }
    return expectedSum - actualSum
};