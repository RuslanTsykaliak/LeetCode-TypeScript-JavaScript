type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if(nums.length === 0) return init;
    let res:number = init;
    nums.forEach(e=>{
        res = fn(res,e);
    })
    return res;
};