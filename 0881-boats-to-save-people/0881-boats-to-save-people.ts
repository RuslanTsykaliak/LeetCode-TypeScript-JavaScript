function numRescueBoats(people: number[], limit: number): number {
    // Sort the people array in ascending order
    people.sort((a, b) => a - b)

    // Initialize two pointers, i and j, to point to the lightest and heaviest person respectively
    let i = 0, j = people.length - 1
    // Initialize the number of boats needed
    let boats = 0

    // Loop until every person has boarded a boat
    while (i <= j) {
        // If the lightest and heaviest person can fit in the same boat, increment i
        if (people[i] + people[j] <= limit) {
            i++
        }
        // Regardless, decrement j because the heaviest person always gets on the boat
        j--

        // Increment the number of boats
        boats++
    }

    // Return the minimum number of boats needed
    return boats
};