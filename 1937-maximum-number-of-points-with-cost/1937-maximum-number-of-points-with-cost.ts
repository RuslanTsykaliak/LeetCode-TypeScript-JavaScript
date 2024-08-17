function maxPoints(grid: number[][]): number {
    let dp = []
    for (let el of grid[0]) {
        dp.push(el)
    }

    const shadow = (dp) => {
        let current = 0;
        for (let i = 0; i < dp.length; i++) {
            current--
            const el = dp[i]
            if (el > current) {
                current = el
            } else {
                dp[i] = current
            }
        }

        for (let i = dp.length - 1; i >= 0; i--) {
            current--
            const el = dp[i]
            if (el > current) {
                current = el
            } else {
                dp[i] = current
            }
        }
    }

    shadow(dp)

    for (let i = 1; i < grid.length; i++) {
        const newDp = []
        for (let j = 0; j < grid[i].length; j++) {
            newDp[j] = grid[i][j] + dp[j]
        }
        shadow(newDp)
        dp = newDp
    }

    return Math.max(...dp)
};