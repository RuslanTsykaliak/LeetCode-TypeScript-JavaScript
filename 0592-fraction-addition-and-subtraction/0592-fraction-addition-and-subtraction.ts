function fractionAddition(expression: string): string { // "-1/2+1/2"
    // split by + or - 
    // split by / 
    // for all the numerators, add - if it was splitted by -
    // for all the denominators, and the least common multiple 
    // add all numerators
    const N = expression.length
    let i = 1, start = 0, end = 0, numerators = [], denominators = []
    while (i <= N) {
        if (expression[i] === '+' || expression[i] === '-' || i === N) {
            end = i // 4 
            const fraction = expression.slice(start, end) // "-1/2", "+1/2"

            const [numerator, denominator] = fraction.split('/') // ["-1", "2"], ["+1", "2"]
            numerators.push(parseInt(numerator)) // [-1, 1]
            denominators.push(parseInt(denominator)) // [2, 2]

            start = end // 4 
        }
        i++
    }
    let commonMulti = denominators[0], numeratorSum = 0
    for (let i = 0; i < denominators.length; i++) {
        if (commonMulti % denominators[i] !== 0) {
            commonMulti = commonMulti * denominators[i]
        }
    }
    for (let i = 0; i < numerators.length; i++) {
        const mutiple = commonMulti / denominators[i]
        numeratorSum += numerators[i] * mutiple // -1+1
    }
    if (numeratorSum === 0) return "0/1"
    const neg = numeratorSum < 0 ? "-" : ""
    numeratorSum = Math.abs(numeratorSum)
    const commonDiv = greatestCommonDivisor(numeratorSum, commonMulti)
    numeratorSum /= commonDiv
    commonMulti /= commonDiv
    return neg + numeratorSum + "/" + commonMulti // "0/2"
};

function greatestCommonDivisor(num1, num2) { // 0 , 1 
    let ans = 1, i = 2
    while (i <= num1) {
        if (num1 % i === 0 && num2 % i === 0) {
            ans *= i
            num1 /= i
            num2 /= i
            i = 1
        }
        i++
    }
    return ans
}