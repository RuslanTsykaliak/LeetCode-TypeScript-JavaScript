function stoneGameII(piles: number[]): number {
    const totalPiles = piles.length;
    const suffixSums = new Array(totalPiles + 1).fill(0);
    for (let i = totalPiles - 1; i >= 0; i--) {
        suffixSums[i] = suffixSums[i + 1] + piles[i];
    }
    const memo: number[][] = Array.from({ length: totalPiles }, () => new Array(totalPiles + 1).fill(0));
    return maxStonesAliceCanGet(suffixSums, 1, 0, memo);
}

function maxStonesAliceCanGet(suffixSums: number[], m: number, currentPile: number, memo: number[][]): number {
    const totalPiles = suffixSums.length - 1;
    if (currentPile >= totalPiles) return 0;
    if (currentPile + 2 * m >= totalPiles) {
        return suffixSums[currentPile];
    }
    if (memo[currentPile][m] !== 0) return memo[currentPile][m];

    let maxStones = 0;
    for (let x = 1; x <= 2 * m; x++) {
        const currentStones = suffixSums[currentPile] - maxStonesAliceCanGet(suffixSums, Math.max(m, x), currentPile + x, memo);
        maxStones = Math.max(maxStones, currentStones);
    }
    memo[currentPile][m] = maxStones;
    return maxStones;
}