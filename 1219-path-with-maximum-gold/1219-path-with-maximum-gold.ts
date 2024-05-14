function getMaximumGold(grid: number[][]): number {
    // Get the number of rows and colums in the grid
    const m = grid.length - 1, n = grid[0].length - 1

    // Define the depth first search (dfs) function
    const dfs = (y: number, x: number): number => {
        // Mark the current cell as visited by negating its value
        grid[y][x] *= -1

        // Calculate the maximum gold that can be collected from the four adjacent cells
        const max = Math.max(
            x > 0 && grid[y][x - 1] > 0 ? dfs(y, x - 1) : 0, // left cell
            y > 0 && grid[y - 1][x] > 0 ? dfs(y - 1, x) : 0, // top cell
            x < n && grid[y][x + 1] > 0 ? dfs(y, x + 1) : 0, // right cell
            y < m && grid[y + 1][x] > 0 ? dfs(y + 1, x) : 0, // bottom cell
        )

        // Unmark the current cell by negating its value again
        grid[y][x] *= -1

        // Return the maximum gold that can be collected from the current cell and its adjacent cells
        return max + grid[y][x]
    }

    // Initialize the maximum gold that can be collected
    let max = 0

    // Traverse each cell in the grid
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            // If the current cell contains gold, update the maximum gold that can be collected
            if (grid[i][j])
                max = Math.max(dfs(i, j), max)
        }
    }

    // Return the maximum gold that can be collected
    return max
};