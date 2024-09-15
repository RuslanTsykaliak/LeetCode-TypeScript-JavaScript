function findTheLongestSubstring(s: string): number {
    let bitmask = 0, maxLength = 0;
    const bitmaskFirstOccurrence: { [key: number]: number } = { 0: -1 };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === 'a') {
            bitmask ^= 1 << 0;
        } else if (ch === 'e') {
            bitmask ^= 1 << 1;
        } else if (ch === 'i') {
            bitmask ^= 1 << 2;
        } else if (ch === 'o') {
            bitmask ^= 1 << 3;
        } else if (ch === 'u') {
            bitmask ^= 1 << 4;
        }

        if (bitmask in bitmaskFirstOccurrence) {
            const length = i - bitmaskFirstOccurrence[bitmask];
            maxLength = Math.max(maxLength, length);
        } else {
            bitmaskFirstOccurrence[bitmask] = i;
        }
    }

    return maxLength;
}