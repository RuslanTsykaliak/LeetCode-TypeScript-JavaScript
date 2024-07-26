function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    const dist = Array.from({ length: n }, () => Array(n).fill(10001))
    let result = 0, small = n

    for (const [u, v, w] of edges) {
        dist[u][v] = w
        dist[v][u] = w
    }

    for (let i = 0; i < n; i++) {
        dist[i][i] = 0
    }

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            for (let k = 0; k < n; k++) {
                dist[i][k] = Math.min(dist[i][k], dist[i][j] + dist[j][k])
            }
        }
    }

    for (let i = 0; i < n; i++) {
        let count = 0
        for (let j = 0; j < n; j++) {
            if (dist[i][j] <= distanceThreshold) {
                count++
            }
        }
        if (count <= small) {
            result = i
            small = count
        }
    }
    return result
};