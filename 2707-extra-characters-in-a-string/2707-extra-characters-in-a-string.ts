function minExtraChar(s: string, dictionary: string[]): number {
    const dictSet = new Set(dictionary);
    const dp = Array(s.length + 1).fill(0);
    for (let i = 1; i <= s.length; i++) {
        dp[i] = dp[i - 1] + 1;
        for (let j = 0; j < i; j++) {
            if (dictSet.has(s.substring(j, i))) dp[i] = Math.min(dp[i], dp[j]);
        }
    }
    return dp[s.length];
}