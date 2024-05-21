function subsets(nums: number[]): number[][] {
    // Initialize the result with an empty subset
    let result: number[][] = [[]]

    // Iterate over each number in the input array
    for (let num of nums) {
        // Initialize an array to store the new subsets
        const newSubsets: number[][] = []

        // Iterate over each current subset in the result
        for (let curr of result) {
            // Create a new subset by adding the current number to the current subset
            newSubsets.push([...curr, num])
        }

        // Add the new subsets to the result
        result = [...result, ...newSubsets]
    }

    // Return the result, wich includes all possible subsets
    return result
};