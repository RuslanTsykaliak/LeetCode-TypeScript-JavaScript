function singleNumber(nums: number[]): number[] {
    // Initialize a new Set to record the numbers
    const record = new Set<number>()

    // Iterate over each number in the input array
    for (const num of nums) {
        // If the number already exists in the Set, remove it
        if (record.has(num)) {
            record.delete(num)
            continue
        }

        // If the number does not exist in the Set, add it
        record.add(num)
    }

    // Return the values in the Set as an array
    // These are the numbers that appear only once in the input array
    return [...record.values()]
};