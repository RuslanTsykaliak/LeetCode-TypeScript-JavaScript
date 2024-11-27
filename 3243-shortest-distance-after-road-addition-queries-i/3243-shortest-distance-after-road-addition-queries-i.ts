function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
    const result = [];
    const dp = [...Array(n).keys()];
    const mem = new Array(n).fill([]);

    for (let [from, to] of (queries)) {
        dp[to] = Math.min(dp[from] + 1, dp[to]);

        mem[to] = [...mem[to], from];

        for (let i = to + 1; i < n; i++) {
            let minPath = dp[i];

            if (mem[i].length) {
                for (let m of mem[i]) {
                    minPath = Math.min(dp[m] + 1, minPath);
                }
            }

            dp[i] = Math.min(dp[i - 1] + 1, minPath);

        }

        result.push(dp[n - 1]);
    }
    return result
};