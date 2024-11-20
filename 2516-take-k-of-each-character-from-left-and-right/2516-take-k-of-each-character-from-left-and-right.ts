function takeCharacters(s: string, k: number): number {
    let countA = 0
    let countB = 0
    let countC = 0

    for (let ch of s) {
        if (ch == 'a') countA++
        if (ch == 'b') countB++
        if (ch == 'c') countC++
    }

    if (countA < k || countB < k || countC < k) return -1

    let max = 0
    let extraA = countA - k
    let extraB = countB - k
    let extraC = countC - k
    let j = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a') extraA--
        if (s[i] == 'b') extraB--
        if (s[i] == 'c') extraC--

        while (extraA < 0 || extraB < 0 || extraC < 0) {
            if (s[j] == 'a') extraA++
            if (s[j] == 'b') extraB++
            if (s[j] == 'c') extraC++

            j++
        }
        max = Math.max(max, i - j + 1)
    }
    return s.length - max
};