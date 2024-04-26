function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const retArr = [];
    for(let i = 0; i < arr.length; i++) {;
        retArr.push(fn(arr[i], i));
    }
    return retArr;
};