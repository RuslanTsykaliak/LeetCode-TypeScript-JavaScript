function modifiedGraphEdges(n: number, edges: number[][], source: number, destination: number, target: number): number[][] {
    const kMax = 2000000000;
    const graph: number[][][] = Array(n).fill(null)
        .map(() => [])

    for (const [u, v, w] of edges) {
        if (w === -1) {
            continue
        }
        graph[u].push([v, w])
        graph[v].push([u, w])
    }

    const distToDestination = dijkstra(graph, source, destination);
    if (distToDestination < target) {
        return []
    }
    if (distToDestination === target) {

        for (const edge of edges) {
            if (edge[2] === -1) {
                edge[2] = kMax
            }
        }
        return edges
    }

    for (let i = 0; i < edges.length; i++) {
        const [u, v, w] = edges[i]
        if (w !== -1) {
            continue
        }
        edges[i][2] = 1
        graph[u].push([v, 1])
        graph[v].push([u, 1])
        const distToDestination = dijkstra(graph, source, destination)
        if (distToDestination <= target) {
            edges[i][2] += target - distToDestination
            for (let j = i + 1; j < edges.length; j++) {
                if (edges[j][2] === -1) {
                    edges[j][2] = kMax
                }
            }
            return edges
        }
    }

    return []
}

function dijkstra(graph: number[][][], src: number, dst: number) {
    const dist = Array(graph.length).fill(Infinity)
    const minHeap = new MinHeap()

    dist[src] = 0
    minHeap.insert(dist[src], src)

    while (!minHeap.isEmpty()) {
        const [d, u] = minHeap.extractMin()!
        for (const [v, w] of graph[u]) {
            if (d + w < dist[v]) {
                dist[v] = d + w
                minHeap.insert(dist[v], v)
            }
        }
    }

    return dist[dst]
}

class MinHeap {
    heap: number[][]
    constructor() {
        this.heap = []
    }

    insert(key: number, value: number) {
        this.heap.push([key, value])
        this.bubbleUp(this.heap.length - 1)
    }

    extractMin() {
        if (this.heap.length === 0) return undefined
        const min = this.heap[0]
        const last = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = last as number[]
            this.bubbleDown(0)
        }
        return min;
    }

    bubbleUp(index: number) {
        const [key, value] = this.heap[index]
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex][0] <= key) {
                break
            }
            this.heap[index] = this.heap[parentIndex]
            index = parentIndex
        }
        this.heap[index] = [key, value]
    }

    bubbleDown(index: number) {
        const [key, value] = this.heap[index]
        const lastIndex = this.heap.length - 1
        while (true) {
            let smallestChildIndex = -1
            let smallestChildKey = key
            let smallestChildValue = value
            const leftChildIndex = 2 * index + 1
            const rightChildIndex = 2 * index + 2
            if (leftChildIndex <= lastIndex) {
                const [leftChildKey, leftChildValue] = this.heap[leftChildIndex]
                if (leftChildKey < smallestChildKey) {
                    smallestChildIndex = leftChildIndex
                    smallestChildKey = leftChildKey
                    smallestChildValue = leftChildValue
                }
            }
            if (rightChildIndex <= lastIndex) {
                const [rightChildKey, rightChildValue] = this.heap[rightChildIndex]
                if (rightChildKey < smallestChildKey) {
                    smallestChildIndex = rightChildIndex
                    smallestChildKey = rightChildKey
                    smallestChildValue = rightChildValue
                }
            }
            if (smallestChildIndex === -1 || key <= smallestChildKey) {
                break
            }
            this.heap[index] = [smallestChildKey, smallestChildValue]
            index = smallestChildIndex
        }
        this.heap[index] = [key, value]
    }

    isEmpty() {
        return this.heap.length === 0
    }
}