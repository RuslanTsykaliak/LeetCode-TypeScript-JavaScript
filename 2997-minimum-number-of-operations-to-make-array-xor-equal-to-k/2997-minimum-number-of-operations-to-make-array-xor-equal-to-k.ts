function minOperations(nums: number[], k: number): number {
    // For each number in the array, we perform a bitwise XOR operation with k
    nums.forEach((num) => {
        k ^= num
    })
    // We then count the number of ones in the binary representation of k
    // This gives us the minimum number of operations required
    return countOnes(k)
};

// This function counts the number of ones in the binary representation of a number
function countOnes(n: number) {
    let result = 0
    // While n is greater than 0
    while (n > 0) {
        // We add the result of bitwise AND operation of n and 1 to the result
        // This effectively counts the number of ones in the binary representation of n
        result += n & 1
        // We then right shift n by 1
        n = n >> 1
    }
    // We return the result, which is the count of ones in the binary representation of n
    return result
}
