function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    // Initialize grid with zeros
    const g: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));

    // Mark guards and walls as 2
    for (const [x, y] of guards) {
        g[x][y] = 2;
    }
    for (const [x, y] of walls) {
        g[x][y] = 2;
    }

    // Directions: up, right, down, left
    const dirs = [-1, 0, 1, 0, -1];

    // Process each guard's line of sight
    for (const [guardX, guardY] of guards) {
        for (let k = 0; k < 4; k++) {
            let x = guardX, y = guardY;
            const dx = dirs[k], dy = dirs[k + 1];

            // Check cells in current direction until hitting boundary or obstacle
            while (x + dx >= 0 && x + dx < m && y + dy >= 0 && y + dy < n && g[x + dx][y + dy] < 2) {
                x += dx;
                y += dy;
                g[x][y] = 1;
            }
        }
    }

    // Count unguarded cells (cells with value 0)
    return g.reduce((count, row) =>
        count + row.filter(cell => cell === 0).length, 0);
}