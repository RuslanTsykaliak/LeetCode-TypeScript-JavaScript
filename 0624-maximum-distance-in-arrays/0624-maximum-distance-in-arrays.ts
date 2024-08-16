function maxDistance(arrays: number[][]): number {
    let max = -Infinity, maxI = -1, min = Infinity, minI = -1

    for (let i = 0; i < arrays.length; i++) {
        const arr = arrays[i]
        if (arr[0] < min) {
            minI = i
            min = arr[0]
        }

        if (arr[arr.length - 1] > max) {
            maxI = i
            max = arr[arr.length - 1]
        }
    }

    let maxBasedDelta = 0, minBasedDelta = 0

    if (minI != maxI) {
        return Math.abs(max - min)
    }

    for (let i = 0; i < arrays.length; i++) {
        const arr = arrays[i]

        if (i != maxI) {
            let val = Math.abs(max - arr[0])
            maxBasedDelta = Math.max(val, maxBasedDelta)
        }

        if (i != minI) {
            let val = Math.abs(arr[arr.length - 1] - min)
            minBasedDelta = Math.max(val, minBasedDelta)
        }

    }


    return Math.max(minBasedDelta, maxBasedDelta)
};