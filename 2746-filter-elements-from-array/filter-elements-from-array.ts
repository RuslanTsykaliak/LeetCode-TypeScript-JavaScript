type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const ans = []
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            ans.push(arr[i])
        }
    }
    return ans
};