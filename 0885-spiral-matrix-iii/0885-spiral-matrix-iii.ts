function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    const ans = [], visited = new Map<string, boolean>()
    let dirX = 1, dirY = 0, y = rStart, x = cStart, cnt = 1

    while (cnt <= rows * cols) {
        visited.set(`${y},${x}`, true)
        if (0 <= y && y < rows && 0 <= x && x < cols) {
            ans.push([y, x])
            cnt += 1
        }
        y += dirY
        x += dirX
        if (visited.get(`${y + dirX},${x - dirY}`) !== true) {
            const tmp = dirY
            dirY = dirX
            dirX = -tmp
        }
    }

    return ans
};