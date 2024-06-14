function minIncrementForUnique(nums: number[]): number {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize moves to count the total increments needed
    // Initialize prev to keep track of the previous element in the sorted array
    let moves = 0, prev = nums[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current element is less than or equal to the previous element
        if (nums[i] <= prev) {
            // Increment prev by 1 and add the difference to moves
            // This ensures the current element becomes unique
            moves += ++prev - nums[i];
        } else {
            // Update prev to the current element if it is already greater than the previous element
            prev = nums[i];
        }
    }

    // Return the total number of moves needed to make all elements unique
    return moves;
};