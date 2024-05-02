// This function finds the maximum number 'k' in the array such that '-k' also exists in the array.
function findMaxK(nums: number[]): number {
    // Initialize the answer to -1. This will hold the maximum 'k' found.
    let ans = -1

    // Loop through each number in the array.
    for (const num of nums) {
        // If the current number is greater than the current maximum 'k' found
        // and the array includes its negative counterpart,
        // update the maximum 'k' found.
        if (num > ans && nums.includes(-num)) {
            ans = num
        }
    }

    // Return the maximum 'k' found. If no such 'k' is found, it will return -1.
    return ans
}
