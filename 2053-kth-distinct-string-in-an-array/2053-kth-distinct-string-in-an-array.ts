function kthDistinct(arr: string[], k: number): string {
    const map = new Map()
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }

    for (const [key, value] of map.entries()) {
        if (value === 1) {
            count++
        }
        if (count === k) {
            return key
        }
    }
    return ""
};