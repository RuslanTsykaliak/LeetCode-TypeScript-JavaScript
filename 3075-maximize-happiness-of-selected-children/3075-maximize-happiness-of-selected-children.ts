// This function calculates the maximum happiness sum that can be achieved by choosing 'k' elements from the 'happiness' array.
function maximumHappinessSum(happiness: number[], k: number): number {
    // Sort the 'happiness' array in descending order.
    const n = happiness.sort((a, b) => b - a)

    // Initialize the sum to 0.
    let sum = 0

    // Iterate over the first 'k' elements in the sorted 'happiness' array.
    for (let i = 0; i < k; i++) {
        // Calculate the happiness value by subtracting the index from the happiness value.
        const h = happiness[i] - i

        // If the happiness value is greater than 0, add it to the sum.
        // Otherwise, break the loop as further elements will also result in non-positive happiness values due to the sorting.
        if (h > 0) sum += h
        else break
    }

    // Return the maximum happiness sum.
    return sum
};