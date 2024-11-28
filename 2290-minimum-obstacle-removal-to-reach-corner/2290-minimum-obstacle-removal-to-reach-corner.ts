class MinHeap {
    private heap: [number, number, number][];

    constructor(initial: [number, number, number][]) {
        this.heap = initial;
    }

    insert(value: [number, number, number]) {
        this.heap.push(value);
        this.bubbleUp();
    }

    remove(): [number, number, number] | undefined {
        if (this.heap.length === 0) return undefined;
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0 && end) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return root;
    }

    getLength(): number {
        return this.heap.length;
    }

    private bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            if (element[1] >= parent[1]) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }

    private bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftIdx < length && this.heap[leftIdx][1] < this.heap[smallest][1]) {
                smallest = leftIdx;
            }
            if (rightIdx < length && this.heap[rightIdx][1] < this.heap[smallest][1]) {
                smallest = rightIdx;
            }
            if (smallest === idx) break;

            this.heap[idx] = this.heap[smallest];
            this.heap[smallest] = element;
            idx = smallest;
        }
    }
}

function minimumObstacles(grid: number[][]): number {
    const n = grid.length;
    const m = grid[0].length;

    const dp: number[][] = Array.from({ length: n }, () => Array(m).fill(Infinity));
    const minHeap = new MinHeap([]);
    minHeap.insert([0, 0, 0]); // i, cost, j
    dp[0][0] = 0;

    const dirs = [-1, 0, 1, 0, -1];

    while (minHeap.getLength() > 0) {
        const [i, curr, j] = minHeap.remove()!;
        if (i === n - 1 && j === m - 1) return curr;

        for (let idx = 0; idx < dirs.length - 1; idx++) {
            const ni = i + dirs[idx];
            const nj = j + dirs[idx + 1];
            if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
                const next = curr + grid[ni][nj];
                if (next < dp[ni][nj]) {
                    dp[ni][nj] = next;
                    minHeap.insert([ni, next, nj]);
                }
            }
        }
    }

    return -1;
}