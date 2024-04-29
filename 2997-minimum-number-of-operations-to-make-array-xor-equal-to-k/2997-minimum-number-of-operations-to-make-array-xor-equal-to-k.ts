function minOperations(nums: number[], k: number): number {
    // Use reduce to calculate the XOR of all numbers
    k = nums.reduce((acc, num) => acc ^ num, k);
    // Count the number of ones in the binary representation of k
    return countOnes(k);
};

// This function counts the number of ones in the binary representation of a number
function countOnes(n: number) {
    let result = 0;
    // Use Brian Kernighan’s Algorithm to count the number of set bits
    while (n) {
        n &= (n - 1);
        result++;
    }
    return result;
}
