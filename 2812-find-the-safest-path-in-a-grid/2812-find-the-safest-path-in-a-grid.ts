function maximumSafenessFactor(grid: number[][]): number {
    // Get the size of the grid
    const n = grid.length

    // Define the four possible directions to move in the grid
    const directions = [
        [0, 1],  // right
        [0, -1], // left
        [1, 0],  // down
        [-1, 0], // up
    ]

    // Initialize the distance array with -1
    const dis = Array.from({ length: n }, () => Array.from({ length: n }, () => -1))

    // Initialize the queue with the cells that have a value of 1
    let queue = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j])
                dis[i][j] = 0
            }
        }
    }

    // Initialize the grups array the initial queue
    const groups = [queue]

    // Perform a breadth-first search (BFS) on the grid
    while (queue.length) {
        const nextQueue = []
        for (const [x, y] of queue) {
            for (const [dx, dy] of directions) {
                const nx = x + dx
                const ny = y + dy
                // If the next cell is within the grid and has not been visited yet, add it to the next queue
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && dis[nx][ny] === -1) {
                    dis[nx][ny] = groups.length
                    nextQueue.push([nx, ny])
                }
            }
        }

        // Move to the next level of the BFS
        queue = nextQueue
        groups.push(queue)
    }

    // Initialize the disjoint set array
    const fa = Array.from({ length: n * n }, (_, i) => i)

    // Define the find function for the disjoint set
    const find = (x) => {
        if (fa[x] !== x) fa[x] = find(fa[x])
        return fa[x]
    }

    // Traverse the groups in reverse order
    for (let i = groups.length - 1; i >= 0; i--) {
        for (const [x, y] of groups[i]) {
            for (const [dx, dy] of directions) {
                const nx = x + dx
                const ny = y + dy
                // If the next cell is within the grid and its distance is not less than the current cell's distance, union the two cells
                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < n &&
                    dis[nx][ny] >= dis[x][y]
                ) {
                    fa[find(nx * n + ny)] = find(x * n + y)
                }
            }

            // If the top-left cell and the bottom-right cell are in the same set, return the current safeness factor
            if (find(0) === find(n * n - 1)) {
                return i
            }
        }
    }

    // If no path is found, return 0
};