function binarySearch(items: number[][], query: number) {
    let left = 0
    let right = items.length - 1
    let currMax = 0

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (items[mid][0] > query) {
            right = mid - 1
        } else {
            currMax = items[mid][1]
            left = mid + 1
        }
    }
    return currMax
}

function maximumBeauty(items: number[][], queries: number[]): number[] {
    let currItemMax = 0
    items.sort((a, b) => a[0] - b[0])
    const newItems = []

    // Remove useless items have price higher but beauty smaller
    for (const item of items) {
        if (item[1] > currItemMax) {
            newItems.push(item)
            currItemMax = item[1]
        }
    }

    const store = new Map<number, number>()

    for (let i = 0; i < queries.length; i += 1) {
        const tmp = store.get(queries[i])
        if (tmp) {
            queries[i] = tmp
        } else {
            queries[i] = binarySearch(newItems, queries[i])

        }
    }
    return queries
};