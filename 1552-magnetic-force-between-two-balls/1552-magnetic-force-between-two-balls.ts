function maxDistance(position: number[], m: number): number {
    // Sort the position array in ascending order
    position.sort((a, b) => a - b)

    // Initialize the left boundary of the serach to 1 and the rigth boundary to the difference between the last and first position
    let left = 1, right = position[position.length - 1] - position[0]
    // Initialize the maximum minimum force to -1
    let maxMinForce = - 1

    // Define a helper function isForceSufficient that checks if it's possible to place all balls such that minimum force is at least the given value
    const isForceSufficient = (force: number) => {
        // Initialize the position of the last placed ball to the first basked position and count of placed balls to 1
        let lastPlacedPosition = position[0], placedBalls = 1

        // Iterate over the remaining basket positions
        for (let i = 1; i < position.length; i++) {
            // If the current basket position is far enough from the last placed ball, place a new ball here
            if (position[i] - lastPlacedPosition >= force) {
                lastPlacedPosition = position[i]
                placedBalls++
            }
        }

        // Return true if all balls could be placed, false otherwise
        return placedBalls >= m
    }

    // Perform a binary search for the maximum force
    while (left <= right) {
        // Calculate the middle force value
        let midForce = left + Math.floor((right - left) / 2)

        // If it's possible to place all balls with at least this force, update maxMinForce and continue the search to the right
        if (isForceSufficient(midForce)) {
            maxMinForce = midForce
            left = midForce + 1
            // Otherwise, continue the search to the left
        } else right = midForce - 1
    }
    // Return the found maximum minimum force
    return maxMinForce
};