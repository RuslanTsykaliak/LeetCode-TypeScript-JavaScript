// Function to find the largest local 3x3 grid in a given grid
function largestLocal(grid: number[][]): number[][] {
    // Initialize the result array with the same dimensions as the input grid, minus 2 in each dimension
    let result: number[][] = new Array(grid.length - 2).fill(0).map(x => [])

    // Iterate over the rows of the grid, excluding the last 2 row
    for (let i = 0; i < grid.length - 2; i++) {
        // Iterate over the columns of the grid, excluding the last 2 columns
        for (let k = 0; k < grid.length - 2; k++) {
            // For each cell, find the maximum value in its local 3x3 grid
            // This is done slicing the 3x3 grid, flattening it into a 1D array, and using Math.max to find the maximum value
            result[i][k] = Math.max(...grid.slice(i, i + 3).map(row => row.slice(k, k + 3)).flat())
        }
    }

    // Return the result grid
    return result
};