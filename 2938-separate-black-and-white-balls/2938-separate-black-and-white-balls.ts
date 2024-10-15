function minimumSteps(s: string): number {
    let count = 0,
        oneCount = 0,
        r = 0;

    while (r < s.length) {
        if (s.charAt(r) === "1") oneCount++;
        if (s.charAt(r) === "0") count += oneCount;
        r++;
    }
    return count;
}