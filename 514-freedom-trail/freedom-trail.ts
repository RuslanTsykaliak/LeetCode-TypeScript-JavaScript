function findRotateSteps(ring: string, key: string): number {
    const n = ring.length;
    const m = key.length;
    const pos = Array.from({ length: 26 }, () => []);
    const dp = Array.from({ length: m + 1 }, () => Array(n).fill(0));
    const ascii_a = 'a'.charCodeAt(0);

    for (let i = 0; i < n; i++) {
        pos[ring[i].charCodeAt(0) - ascii_a].push(i);
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = Infinity;
            for (const k of pos[key[i].charCodeAt(0) - ascii_a]) {
                let diff = Math.abs(j - k);
                let step = Math.min(diff, n - diff);
                dp[i][j] = Math.min(dp[i][j], step + dp[i + 1][k]);
            }
        }
    }

    return dp[0][0] + m;
}
