function getAncestors(n: number, edges: number[][]): number[][] {
    const graph: number[][] = Array.from({ length: n }, () => []);
    const ancestors: Set<number>[] = Array.from({ length: n }, () => new Set<number>());

    for (const [from, to] of edges) {
        graph[from].push(to);
    }

    const dfs = (currentNode: number, ancestor: number) => {
        for (const child of graph[currentNode]) {
            if (!ancestors[child].has(ancestor)) {
                ancestors[child].add(ancestor);
                dfs(child, ancestor);
            }
        }
    };

    for (let node = 0; node < n; node++) {
        dfs(node, node);
    }

    return ancestors.map(ancestorSet => Array.from(ancestorSet).sort((a, b) => a - b));
};