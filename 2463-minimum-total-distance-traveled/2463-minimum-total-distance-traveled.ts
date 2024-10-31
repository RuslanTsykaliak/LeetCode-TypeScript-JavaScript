function minimumTotalDistance(robot: number[], factory: number[][]): number {
    const n = robot.length;
    const m = factory.length;
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const dp = [];
    for (let i = 0; i < m; i++) dp.push(Array(n).fill(null));

    function getDp(fi, ri) {
        if (ri < 0) return 0;
        if (fi < 0) return null;
        return dp[fi][ri];
    }

    for (let fi = 0; fi < m; fi++) {
        for (let rir = 0; rir < n; rir++) {
            dp[fi][rir] = getDp(fi - 1, rir);
            let sum = 0;
            for (let ril = rir; ril >= Math.max(0, rir - factory[fi][1] + 1); ril--) {
                sum += Math.abs(robot[ril] - factory[fi][0]);
                const prev = getDp(fi - 1, ril - 1);
                if (prev !== null) {
                    if (dp[fi][rir] === null) dp[fi][rir] = prev + sum;
                    else dp[fi][rir] = Math.min(dp[fi][rir], prev + sum);
                }
            }
        }
    }

    return dp[m - 1][n - 1];
};