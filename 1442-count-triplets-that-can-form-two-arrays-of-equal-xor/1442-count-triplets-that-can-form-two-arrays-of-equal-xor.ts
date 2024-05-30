function countTriplets(arr: number[]): number {
    // Get the length of the array
    const n = arr.length
    // Initialize the count of triplets and prefix XOR
    let count = 0, prefix = 0

    // Initialize a map to store the count of prefix XORs
    const countMap = new Map<number, number>()
    countMap.set(0, 1)

    // Initialize a map to store the total of indices for each prefix XOR
    const totalMap = new Map<number, number>()

    // Iterate over the array
    for (let i = 0; i < n; i++) {
        // Calculate the prefix XOR
        prefix ^= arr[i]

        // Add the count of the current prefix XOR times the current index minus the total of indices for the current prefix XOR to the count of triplets
        count += (countMap.get(prefix) | 0) * i - (totalMap.get(prefix) | 0)

        // Update the total of indices for the current prefix XOR
        totalMap.set(prefix, (totalMap.get(prefix) | 0) + i + 1)

        // Update the count ofthe current prefix XOR
        countMap.set(prefix, (countMap.get(prefix) | 0) + 1)
    }

    // Return the count of triplets
    return count
};