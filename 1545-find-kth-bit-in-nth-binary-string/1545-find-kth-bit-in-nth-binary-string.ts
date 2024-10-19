function findKthBit(n: number, k: number): string {
    function recursion(str: string, index: number): string {
        if (!(index <= n)) return str

        const newStr = str + '1' + reverse(invert(str))

        return recursion(newStr, index + 1)
    }

    const returnNum = recursion('0', 1)

    return returnNum[k - 1]
}

function invert(s: string): string {
    return s.split('').map(el => el === '1' ? '0' : '1').join('')
}

function reverse(s: string): string {
    let returnString: string = ''

    for (let char of s) returnString = char + returnString

    return returnString
}