// This function calculates the maximum happiness sum that can be achieved by choosing 'k' elements from the 'happiness' array.
function maximumHappinessSum(happiness: number[], k: number): number {
    // Sort the 'happiness' array in descending order.
    happiness.sort((a, b) => b - a)

    // If 'k' is greater than the length of the array, return the sum of all elements.
    if (k > happiness.length) {
        return happiness.reduce((a, b) => a + b, 0)
    }

    // Initialize the sum to 0.
    let sum = 0

    // Iterate over the first 'k' elements in the sorted 'happiness' array.
    for (let i = 0; i < k; i++) {
        // If the happiness value is greater than the index, add it to the sum.
        // Otherwise, break the loop as further elements will also result in non-positive happiness values due to the sorting.
        if (happiness[i] > i) {
            sum += happiness[i] - i
        } else {
            break
        }
    }

    // Return the maximum happiness sum.
    return sum
}