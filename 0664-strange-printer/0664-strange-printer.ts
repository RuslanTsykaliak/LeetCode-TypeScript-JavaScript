function strangePrinter(s: string): number {
    const n = s.length,
        dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + 1;
            for (let k = i; k < j; k++) {
                if (s[k] == s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j - 1]);
                }
            }
        }
    }

    return dp[0][n - 1];
}