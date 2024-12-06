function maxCount(banned: number[], n: number, maxSum: number): number {
    let chossedIntegers = [],
        chossedIntegerSum = 0;

    for (let i = 1; i <= n; i++) {
        const element = i;

        if (banned.some((bannedElement) => bannedElement === element)) continue;
        if (chossedIntegerSum + element <= maxSum) {
            chossedIntegers.push(element)
            chossedIntegerSum += element;
        } else {
            break
        }
    }
    return chossedIntegers.length;
}