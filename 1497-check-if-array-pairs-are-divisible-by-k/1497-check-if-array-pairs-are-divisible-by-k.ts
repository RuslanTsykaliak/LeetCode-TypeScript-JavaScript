function canArrange(arr: number[], k: number): boolean {
    // Create frequency array
    const freq: number[] = new Array(k).fill(0);

    // Count frequencies of remainders
    for (let num of arr) {
        // Handle negative numbers correctly
        let remainder: number = ((num % k) + k) % k;
        freq[remainder]++;
    }

    // Check if count of elements with remainder 0 is even
    if (freq[0] % 2 !== 0) {
        return false;
    }

    // Check if counts of complementary remainders are equal
    for (let i = 1; i <= k / 2; i++) {
        if (freq[i] !== freq[k - i]) {
            return false;
        }
    }

    return true;
}