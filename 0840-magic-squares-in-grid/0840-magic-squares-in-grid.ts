function numMagicSquaresInside(grid: number[][]): number {
    let ans = 0;
    const m = grid.length, n = grid[0].length;

    for (let row = 0; row + 2 < m; row++) {
        for (let col = 0; col + 2 < n; col++) {
            if (isMagicSquare(grid, row, col)) {
                ans++;
            }
        }
    }
    return ans;
}

function isMagicSquare(grid: number[][], row: number, col: number): boolean {
    const seen: boolean[] = new Array(10).fill(false);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const num = grid[row + i][col + j];
            if (num < 1 || num > 9) return false;
            if (seen[num]) return false;
            seen[num] = true;
        }
    }

    // Check if diagonal sums are the same value
    const diagonal1 = grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2];
    const diagonal2 = grid[row + 2][col] + grid[row + 1][col + 1] + grid[row][col + 2];

    if (diagonal1 !== diagonal2) return false;

    // Check if all row sums share the same value as the diagonal sums
    const row1 = grid[row][col] + grid[row][col + 1] + grid[row][col + 2];
    const row2 = grid[row + 1][col] + grid[row + 1][col + 1] + grid[row + 1][col + 2];
    const row3 = grid[row + 2][col] + grid[row + 2][col + 1] + grid[row + 2][col + 2];

    if (!(row1 === diagonal1 && row2 === diagonal1 && row3 === diagonal1)) {
        return false;
    }

    // Check if all column sums share the same value as the diagonal sums
    const col1 = grid[row][col] + grid[row + 1][col] + grid[row + 2][col];
    const col2 = grid[row][col + 1] + grid[row + 1][col + 1] + grid[row + 2][col + 1];
    const col3 = grid[row][col + 2] + grid[row + 1][col + 2] + grid[row + 2][col + 2];

    if (!(col1 === diagonal1 && col2 === diagonal1 && col3 === diagonal2)) {
        return false;
    }

    return true;
};