function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    // Initialize arrays
    const graph = Array.from({length: n}, () => []);
    const count = Array(n).fill(1);
    const res = Array(n).fill(0);

    // Build the graph
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // Post-order traversal
    const postOrder = (root: number, pre: number) => {
        for (let i of graph[root]) {
            if (i === pre) continue;
            postOrder(i, root);
            count[root] += count[i];
            res[root] += res[i] + count[i];
        }
    }

    // Pre-order traversal
    const preOrder = (root: number, pre: number) => {
        for (let i of graph[root]) {
            if (i === pre) continue;
            res[i] = res[root] - count[i] + n - count[i];
            preOrder(i, root);
        }
    }

    postOrder(0, -1);
    preOrder(0, -1);
    return res;
}
