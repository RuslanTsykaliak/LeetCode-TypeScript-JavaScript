function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const cache = new Set();
    let result = 0;
    for (let num of arr1) {
        while (num > 0) {
            cache.add(num);
            num = Math.floor(num / 10);
        }
    }
    for (let num of arr2) {
        let currentLen = `${num}`.length;
        while (num > 0 && currentLen > result) {
            if (cache.has(num)) {
                result = currentLen;
            }
            num = Math.floor(num / 10);
            currentLen -= 1;
        }
    }
    return result;
};