function subarraysDivByK(nums: number[], k: number): number {
    // Initialize the result and sum variables
    let result = 0
    let sum = 0

    // Create an array m of size k and fill it with zeros
    let m = Array(k).fill(0)
    // The first element of m is set to 1 to handle the case where a subarray's sum is evenly divisible by k
    m[0] = 1

    // Iterate over the input array
    for (let i = 0; i < nums.length; i++) {
        // Add the current element to the sum
        sum += nums[i]

        // Calculate the remainder of the sum divided by k
        // The sum may be negative and the modulo of a negative number is negative in JavaScript, so we add k and then take modulo k to ensure the remainder is positive
        let remainder = ((sum % k) + k) % k

        // Add the count of subarrays with the same remainder to the result
        // Then increment the count of subarrays with the same remainder
        result += m[remainder]++
    }

    // Return the total count of subarrays whose sum is divisible by k
    return result
};
