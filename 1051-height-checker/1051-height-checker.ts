function heightChecker(heights: number[]): number {
    // Create a sorted copy of the heights array.
    // This is done by slicing the original array to avoid modifying it,
    // and then sorting the new array in ascending order.
    let sortedHeights: number[] = heights.slice().sort((a, b) => a - b);

    // Initialize a counter to keep track of the number of students
    // who are not standing in the correct order based on their height.
    let outOfOrderCount: number = 0;

    // Iterate over the array using a for loop.
    // The loop goes through each element of the array by index.
    for (let i = 0; i < heights.length; i++) {
        // Compare the element at the current index of the original array
        // to the element at the same index in the sorted array.
        // If they don't match, it means the student is not in the correct order.
        if (heights[i] !== sortedHeights[i]) {
            // Increment the counter each time a student is found
            // in the wrong order.
            outOfOrderCount++;
        }
    }

    // After the loop, return the total count of students
    // who are out of order.
    return outOfOrderCount;
};
