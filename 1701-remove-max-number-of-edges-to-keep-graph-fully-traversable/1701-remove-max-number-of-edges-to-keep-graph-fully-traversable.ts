function maxNumEdgesToRemove(n: number, edges: number[][]): number {
    class UnionFind {
        parent: number[];
        rank: number[];
        components: number;

        constructor(size: number) {
            this.parent = Array.from({ length: size + 1}, (_, i) => i);
            this.rank = Array(size + 1).fill(1);
            this.components = size;
        }

        find(x: number): number {
            return this.parent[x] === x ? x : (this.parent[x] = this.find(this.parent[x]));
        }

        union(x: number, y: number): boolean {
            const rootX = this.find(x), rootY = this.find(y);
            if (rootX === rootY) return false;
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
            this.components--;
            return true;
        }

        isSingleComponent(): boolean {
            return this.components === 1;
        }
    }

    const alice = new UnionFind(n), bob = new UnionFind(n);
    let edgesUsed = 0;
    edges.sort((a, b) => b[0] -a[0]);

    for (const [type, u, v] of edges) {
        if (type === 3) {
            const aliceConnected = alice.union(u, v);
            const bobConnected = bob.union(u, v);
            if (aliceConnected || bobConnected) edgesUsed++;
        } else if (type === 1) {
            if (alice.union(u, v)) edgesUsed++;
        } else if (type === 2) {
            if (bob.union(u, v)) edgesUsed++;
        }
    }

    return alice.isSingleComponent() && bob.isSingleComponent() ? edges.length - edgesUsed : - 1;
};