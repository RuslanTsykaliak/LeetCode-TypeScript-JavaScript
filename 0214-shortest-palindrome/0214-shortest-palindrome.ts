function shortestPalindrome(s: string): string {
    if (!s || s.length === 0) return s;

    let newStr = s + '#' + s.split('').reverse().join('');

    let n = newStr.length;
    let lps = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        let j = lps[i - 1];

        while (j > 0 && newStr[i] !== newStr[j]) {
            j = lps[j - 1];
        }

        if (newStr[i] === newStr[j]) {
            j++;
        }

        lps[i] = j;
    }

    let longestPalindromicPrefixLen = lps[n - 1];

    let nonPalindromeSuffix = s.slice(longestPalindromicPrefixLen);

    return nonPalindromeSuffix.split('').reverse().join('') + s;
};