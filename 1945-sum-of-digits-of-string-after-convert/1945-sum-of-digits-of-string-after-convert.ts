function getLucky(s: string, k: number): number {
    const base = 'a'.charCodeAt(0);

    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const val = s.charCodeAt(i) - base + 1;
        sum += Math.floor(val / 10) + val % 10;
    }

    for (let i = 1; i < k; i++) {
        let numStr = sum.toString();
        sum = 0;
        for (let j = 0; j < numStr.length; j++) {
            sum += Number(numStr[j]);
        }
    }

    return sum;
}