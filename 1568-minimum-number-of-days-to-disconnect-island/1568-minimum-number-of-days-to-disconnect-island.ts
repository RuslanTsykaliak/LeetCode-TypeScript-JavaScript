function minDays(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ]

    const isInBounds = (x: number, y: number): boolean => {
        return x >= 0 && x < m && y >= 0 && y < n
    }

    const dfs = (x: number, y: number, visited: boolean[][]): void => {
        visited[x][y] = true
        for (const [dx, dy] of directions) {
            const nx = x + dx
            const ny = y + dy
            if (isInBounds(nx, ny) && grid[nx][ny] === 1 && !visited[nx][ny]) {
                dfs(nx, ny, visited)
            }
        }
    }

    const countIslands = (): number => {
        const visited = Array.from({ length: m }, () => Array(n).fill(false))
        let count = 0
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1 && !visited[i][j]) {
                    count++
                    dfs(i, j, visited)
                }
            }
        }
        return count
    }

    if (countIslands() !== 1) return 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0
                if (countIslands() !== 1) return 1
                grid[i][j] = 1
            }
        }
    }

    return 2
}