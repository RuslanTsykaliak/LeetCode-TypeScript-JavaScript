function maximumLength(s: string): number {
    let currentPrevSym = s[0];
    let firstIndexSym = 0;
    let maxLenOfSpecial = 0;
    const lenMap = new Map();
    const sLen = s.length;
    for (let i = 0; i <= sLen; i += 1) {
        const sym = i === sLen ? null : s[i];
        if (sym !== currentPrevSym) {
            const len = i - firstIndexSym;
            if (len > maxLenOfSpecial) {
                for (let up = len; up > maxLenOfSpecial; up -= 1) {
                    const index = `${currentPrevSym}_${up}`;
                    const val = (lenMap.get(index) ?? 0) + (len - up + 1);
                    if (val >= 3) {
                        maxLenOfSpecial = up;
                        break;
                    }
                    lenMap.set(index, val);
                }
            }
            currentPrevSym = sym;
            firstIndexSym = i;
        }
    }
    return maxLenOfSpecial > 0 ? maxLenOfSpecial : -1;
};