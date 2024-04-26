function minFallingPathSum(grid: number[][]): number {
    const n = grid.length;
    let dp = [...grid[0]]; // Initialize dp with the first row of the grid

    // Start from the second row
    for (let i = 1; i < n; i++) {
        const newDp = new Array(n).fill(Number.MAX_SAFE_INTEGER);

        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                // Skip the same column
                if (j === k) continue;

                // Update the new dp value by choosing the minimum between the current dp value and the sum of the current grid value and the previous dp value
                newDp[j] = Math.min(newDp[j], grid[i][j] + dp[k]);
            }
        }

        dp = newDp; // Update dp
    }

    // The minimum falling path sum is the minimum value in dp
    return Math.min(...dp);
}
