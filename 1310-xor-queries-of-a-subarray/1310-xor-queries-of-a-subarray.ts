function xorQueries(arr: number[], queries: number[][]): number[] {
    const N = arr.length,
        storeValue = new Array(N).fill(0);
    arr.forEach((item, idx) => {
        storeValue[idx] = idx === 0 ? item : storeValue[idx - 1] ^ item
    })
    return queries.map((item) => {
        const [start, end] = item;
        if (end === start) return arr[start]
        else if (end - start === 1) return arr[start] ^ arr[end];
        else {
            return storeValue[end] ^ (start === 0 ? 0 : storeValue[start - 1])
        }
    })
};