function sortJumbled(mapping: number[], nums: number[]): number[] {
    const mappedNums = new Map<number, number>()
    for (const num of nums) {
        const numStr = `${num}`
        let mappedNum = ''
        for (let i = 0; i < numStr.length; i++) {
            mappedNum += mapping[+numStr.charAt(i)]
        }
        mappedNums.set(num, +mappedNum)
    }
    return nums.sort((a, b) => mappedNums.get(a) - mappedNums.get(b))
};