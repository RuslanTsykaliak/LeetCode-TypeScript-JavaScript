function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const sum = rolls.reduce((s, i) => s + i, 0)
    let missing = mean * (n + rolls.length) - sum
    const ans = []
    if (missing <= 0) {
        return []
    } else {
        while (0 < n && 0 < missing) {
            const roll = Math.min(Math.ceil(missing / n), 6)
            ans.push(roll)
            missing -= roll
            n -= 1
        }
        if (n !== 0 || missing !== 0) {
            return []
        } else {
            return ans
        }
    }
};