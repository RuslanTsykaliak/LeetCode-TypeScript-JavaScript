function secondMinimum(n: number, edges: number[][], time: number, change: number): number {
    const adj = Array.from({ length: n + 1 }, () => [])

    for (const [v1, v2] of edges) {
        adj[v1].push(v2)
        adj[v2].push(v1)
    }

    const queue = [1], visitTimes = Array.from({ length: n + 1 }, () => [])
    let curTime = 0, res = -1

    while (queue.length > 0) {
        const levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!

            if (node === n) {
                if (res !== -1) {
                    return curTime
                }
                res = curTime
            }

            for (const nei of adj[node]) {
                const neiTimes = visitTimes[nei]

                if (neiTimes.length === 0 || (neiTimes.length === 1 && neiTimes[0] !== curTime)) {
                    queue.push(nei)
                    neiTimes.push(curTime)
                }
            }
        }
        if (Math.floor(curTime / change) % 2 === 1) {
            curTime += change - (curTime % change)
        }
        curTime += time
    }
    return -1
};