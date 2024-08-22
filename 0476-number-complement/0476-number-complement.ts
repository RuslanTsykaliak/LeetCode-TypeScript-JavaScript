function findComplement(num: number): number {
    let b = num.toString(2).split('')
    for (let i = 0; i < b.length; i++) {
        if (b[i] == '1') {
            b[i] = '0'
        } else {
            b[i] = '1'
        }
    }
    console.log(b)
    return parseInt(b.join(''), 2)
};