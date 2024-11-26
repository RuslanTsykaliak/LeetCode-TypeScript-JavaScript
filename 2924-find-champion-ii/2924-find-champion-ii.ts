function findChampion(n: number, edges: number[][]): number {
    let champion = -1;
    let adjList = new Map();

    for (let i = 0; i < n; i++) {
        adjList.set(i, []);
    }

    for (let [a, b] of edges) {
        adjList.get(b).push(a);
    }

    for (let i = 0; i < n; i++) {
        if (adjList.get(i).length == 0) {
            if (champion != -1) return -1;

            champion = i;
        }
    }

    return champion;
};