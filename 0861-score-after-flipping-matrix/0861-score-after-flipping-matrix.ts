function matrixScore(grid: number[][]): number {
    // Get the number of rows in the grid
    const rows: number = grid.length
    // Get the number of colums in the grid
    const cols: number = grid[0].length

    // Toggle rows
    for (let r = 0; r < rows; r++) {
        // If the first element of a row is 0, toogle the entire row
        if (grid[r][0] === 0) {
            for (let c = 0; c < cols; c++) {
                // Toggle the element at grid[r][c]
                grid[r][c] = 1 - grid[r][c]
            }
        }
    }

    // Initialize a map to count zeroes in columns
    const counts: Map<number, number> = new Map()
    for (let c = 1; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            // If the element at grid[r][c] is 0, increment the count for column c
            if (grid[r][c] === 0) {
                counts.set(c, (counts.get(c) || 0) + 1)
            }
        }
    }

    // Initialize the score with the number of rows times 2 to the power of (cols - 1)
    let res: number = rows * Math.pow(2, cols - 1)
    for (let c = 1; c < cols; c++) {
        // Get the count of zeroes in column c
        const count: number = counts.get(c) || 0
        // Add the maximum of count and (rows - count) times 2 to the power of (cols - c - 1) to the score
        res += Math.max(count, rows - count) * Math.pow(2, cols - c - 1)
    }

    // Return the maximum score
    return res
};