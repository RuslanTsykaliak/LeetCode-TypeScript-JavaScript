function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    let freqMap = new Map<number, number>()
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    let frequencies = Array.from(freqMap.values())
    frequencies.sort((a, b) => a -b)

    let total = 0
    for (let freq of frequencies) {
        if (k >= freq) {
            k -= freq
            total++
        } else {
            break
        }
    }
    return freqMap.size - total
};