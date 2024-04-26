function majorityElement(nums: number[]): number {
    let result
    const majorCriticalPoint = nums.length/2
    const acc = nums.reduce((acc,item)=>{
        acc[item]=(acc[item]|| 0) + 1
        if (acc[item]>=majorCriticalPoint){
            result = item
        }
        return acc
    },{})
    return result
};