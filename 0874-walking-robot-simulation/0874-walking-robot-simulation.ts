function robotSim(commands: number[], obstacles: number[][]): number {
    const OBS = new Map<number, Set<number>>()
    for (const [x, y] of obstacles) {
        if (!OBS.has(x)) {
            OBS.set(x, new Set())
        }
        OBS.get(x).add(y)
    }

    // [[dx, dy]]
    const DIRECTIONS = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]
    let dirIndex = 0

    let maxEculidian = 0
    let x = 0
    let y = 0
    for (const c of commands) {
        if (c === -1) {
            dirIndex += 1
            dirIndex = dirIndex === 4 ? 0 : dirIndex
            continue
        }
        if (c === -2) {
            dirIndex -= 1
            dirIndex = dirIndex < 0 ? 3 : dirIndex
            continue
        }

        const [dx, dy] = DIRECTIONS[dirIndex]
        for (let i = 0; i < c; i++) {
            const newX = x + dx
            const newY = y + dy
            if (OBS.has(newX) && OBS.get(newX).has(newY)) {
                break
            }
            x = newX
            y = newY
        }
        maxEculidian = Math.max(maxEculidian, x * x + y * y)
    }

    return maxEculidian
}