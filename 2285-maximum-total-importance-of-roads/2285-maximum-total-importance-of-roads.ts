function maximumImportance(n: number, roads: number[][]): number {
    const count = new Array(n).fill(0);
    let total = 0;

    for (const [a, b] of roads) {
        count[a]++;
        count[b]++;
    }

    count.sort((a, b) => a - b);

    for (let i = 1; i <=n; i++) {
        total += i * count[i - 1];
    }

    return total;
};