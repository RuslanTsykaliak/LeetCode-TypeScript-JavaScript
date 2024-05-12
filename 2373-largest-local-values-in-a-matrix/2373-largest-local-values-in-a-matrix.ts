// Function to find the largest value in each local 3x3 grid in a given grid
function largestLocal(grid: number[][]): number[][] {
    // Define the size of the window to consider for each local grid
    let windowSize = 3;
    // Initialize an array to store the maximum values
    let reduceArray = [];

    // Iterate over the rows of the grid, excluding the last 2 rows
    for (let x = 0; x < grid.length - windowSize + 1; x++) {
        // Add a new row to the result array
        reduceArray.push([]);
        // Iterate over the columns of the grid, excluding the last 2 columns
        for (let y = 0; y < grid.length - windowSize + 1; y++) {
            // Initialize the maximum value as the smallest possible number
            let maxValue = Number.MIN_SAFE_INTEGER;
            // Iterate over the 3x3 grid centered at the current cell
            for (let i = x; i < x + windowSize; i++) {
                for (let j = y; j < y + windowSize; j++) {
                    // Update the maximum value if the current cell's value is larger
                    maxValue = Math.max(maxValue, grid[i][j]);
                }
            }
            // Add the maximum value to the result array
            reduceArray[reduceArray.length - 1].push(maxValue);
        }
    }

    // Return the result array
    return reduceArray;
};
