function numberOfSubarrays(nums: number[], k: number): number {
    let subarrays = 0
    let oddCount = 0
    let start = 0
    let subarraySiblings = 0
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] % 2 === 1) {
            oddCount++
            subarraySiblings = 0
        }
        while (oddCount === k) {
            if (nums[start] % 2 === 1) {
                oddCount--
            }
            subarraySiblings++
            start++
        }
        subarrays += subarraySiblings
    }

    return subarrays
};