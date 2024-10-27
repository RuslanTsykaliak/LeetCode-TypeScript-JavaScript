function countSquares(matrix: number[][]): number {
    const solve = () => {
        const m = matrix.length
        const n = matrix[0].length
        const dp = new Array(m);

        for (let i = 0; i < m; i++)
            dp[i] = new Array(n)

        let sum = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 1) {
                    const left = (j - 1 >= 0) ? dp[i][j - 1] : 0;
                    const up = (i - 1 >= 0) ? dp[i - 1][j] : 0;
                    const diag = (i - 1 >= 0 && j - 1 >= 0) ? dp[i - 1][j - 1] : 0;
                    dp[i][j] = Math.min(left, up, diag) + matrix[i][j]
                } else {
                    dp[i][j] = 0;
                }
                sum += dp[i][j]
            }
        }
        return sum;
    }
    return solve()
};