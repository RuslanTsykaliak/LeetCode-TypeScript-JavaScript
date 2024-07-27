function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
    const AL_S = 26, I = Infinity, dist = Array.from({ length: AL_S }, () => Array(AL_S).fill(I))

    for (let i = 0; i < AL_S; i++) {
        dist[i][i] = 0
    }

    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0)
        const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0)
        dist[from][to] = Math.min(dist[from][to], cost[i])
    }

    for (let k = 0; k < AL_S; k++) {
        for (let i = 0; i < AL_S; i++) {
            for (let j = 0; j < AL_S; j++) {
                if (dist[i][k] < I && dist[k][j] < I) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
                }
            }
        }
    }

    let totalCost = 0;
    for (let i = 0; i < source.length; i++) {
        const srcChar = source[i].charCodeAt(0) - 'a'.charCodeAt(0)
        const tgtChar = target[i].charCodeAt(0) - 'a'.charCodeAt(0)
        if (dist[srcChar][tgtChar] === I) {
            return -1
        }
        totalCost += dist[srcChar][tgtChar]
    }
    return totalCost
};