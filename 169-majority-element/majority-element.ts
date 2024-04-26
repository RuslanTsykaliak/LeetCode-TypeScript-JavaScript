function majorityElement(nums: number[]): number {
    let result = 0
    let majority = 0
    const map = new Map()

    for(let num of nums){
        map[num] = 1 + (map[num] || 0)
        if(map[num] > majority){
            result = num
            majority = map[num]
        }
    }

    return result
};