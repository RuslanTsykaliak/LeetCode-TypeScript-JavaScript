function minEnd(n: number, x: number): number {
    if (n === 1) return x
    const nth = (n - 1).toString(2)
    const mask = x.toString(2)

    let result = ''
    let right = nth.length - 1;
    for (let i = mask.length - 1; i >= 0; i--) {
        if (mask[i] === '1') {
            result = '1' + result;
        } else {
            result = (
                nth[right] ?? '0'
            ) + result;
            right--;
        }
    }

    for (; right >= 0; right--) {
        result = nth[right] + result
    }

    return parseInt(result, 2)
};