function subsetXORSum(nums: number[]): number {
    // Define a recursive function (dfs) to perform depth-first search
    const dfs = (i: number, sum: number): number => {
        // If we've reached the end of the array, return the current sum
        if (i === nums.length) return sum

        // Recursively call dfs for the next index (i + 1)
        // Once including the XOR of the current number and the sum
        // And once without including the current number
        // THe sum of these two calls is returned
        return dfs(i + 1, sum ^ nums[i]) + dfs(i + 1, sum)
    }

    // Start the dfs from the first index (0) with an initial sum of 0
    return dfs(0, 0)
};