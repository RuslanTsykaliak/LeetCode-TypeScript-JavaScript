function regionsBySlashes(grid: string[]): number {
    const n = grid.length, nn = n + 1;
    const parent: number[] = Array.from({ length: nn * nn }, (_, i) => i);
    let count = 0;

    function find(node: number): number {
        if (node !== parent[node]) {
            parent[node] = find(parent[node]); // Path compression
        }
        return parent[node];
    }

    function union(n1: number, n2: number): void {
        const root1 = find(n1);
        const root2 = find(n2);

        if (root1 !== root2) {
            parent[root2] = root1; // Union
        } else {
            count++; // A new region is found
        }
    }

    // Connect boundary nodes to a virtual node (0)
    for (let i = 0; i < nn; i++) {
        for (let j = 0; j < nn; j++) {
            if (i === 0 || j === 0 || i === n || j === n) {
                union(0, i * nn + j);
            }
        }
    }

    // Process the grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '/') {
                union((i + 1) * nn + j, i * nn + (j + 1));
            } else if (grid[i][j] === '\\') {
                union(i * nn + j, (i + 1) * nn + (j + 1));
            }
        }
    }

    return count;
}