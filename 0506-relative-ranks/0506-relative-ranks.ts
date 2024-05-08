// This function assigns relative ranks to each score in the input array and returns an array of ranks.
function findRelativeRanks(score: number[]): string[] {
    // Define the medals for the top three ranks.
    const medals = ['Gold', 'Silver', 'Bronze']

    // Create a copy of the input array, sort it in descending order, and assign ranks to each score.
    // The ranks are stored in an object, with scores as keys and ranks as values.
    const ranking = [...score]
        .sort((a, b) => b - a) // Sort items by descending order
        .reduce((prev, current, index) => {
            // If the rank is less than 3 (i.e., 0, 1, or 2), assign a medal to the score.
            // Otherwise, assign the numerical rank (index + 1).
            prev[current] = index < 3 ? `${medals[index]} Medal` : `${index + 1}`
            return prev
        }, {})

    // Map each score in the input array to its rank and return the array of ranks.
    return score.map((position, index) => ranking[position])
};