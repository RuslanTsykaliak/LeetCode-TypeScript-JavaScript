function minSteps(n: number): number {
    return primeFactors(n).reduce((total, curr) => total + curr, 0)
};

function primeFactors(n): number[] {
    const factors: number[] = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}