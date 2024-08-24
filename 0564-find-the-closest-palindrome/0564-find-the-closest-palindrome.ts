function nearestPalindromic(n: string): string {
    const length = n.length,
        candidates = new Set<string>();

    // Edge case for '1'
    if (n === "1") {
        return "0";
    }

    // 1. Consider the mirrored palindrome
    const prefix = n.substring(0, Math.floor((length + 1) / 2)),
        prefixNum = parseInt(prefix);

    // Generate palindromes by decrementing, mirroring, and incrementing the prefix
    for (let i of [prefixNum - 1, prefixNum, prefixNum + 1]) {
        const iStr = i.toString();
        if (length % 2 === 0) {
            candidates.add(iStr + iStr.split('').reverse().join(''));
        } else {
            candidates.add(iStr + iStr.slice(0, -1).split('').reverse().join(''));
        }
    }

    // 2. Consider palindromes with different lengths
    candidates.add("9".repeat(length - 1)); // Example: "999" for "1000"
    candidates.add("1" + "0".repeat(length - 1) + "1"); // Example: "1001" for "999"

    // 3. Remove the original number from candidates if present
    candidates.delete(n);

    // 4. Find the closest palindrome by comparing differences
    let closest: string | null = null;
    for (let candidate of candidates) {
        if (closest === null ||
            Math.abs(parseInt(candidate) - parseInt(n)) < Math.abs(parseInt(closest) - parseInt(n)) ||
            (Math.abs(parseInt(candidate) - parseInt(n)) === Math.abs(parseInt(closest) - parseInt(n)) && parseInt(candidate) < parseInt(closest))) {
            closest = candidate;
        }
    }

    return closest!;
};