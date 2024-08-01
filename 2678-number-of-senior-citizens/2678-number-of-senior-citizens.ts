function countSeniors(details: string[]): number {
    let result = 0
    for (let person of details) {
        if (+person.substring(11, 13) > 60) {
            result += 1
        }
    }
    return result
};