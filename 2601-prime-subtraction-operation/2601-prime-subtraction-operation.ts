function primeSubOperation(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const previous = i > 0 ? nums[i - 1] : 0

        const diff = current - previous - 1
        if (diff < 0) {
            return false
        }

        const biggestPrime = largestPrimeBelow(diff)

        if (previous >= current - biggestPrime) {
            return false
        }

        nums[i] = current - biggestPrime
    }

    return true
};

function isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function largestPrimeBelow(num: number): number {
    for (let i = num; i > 1; i--) {
        if (isPrime(i)) {
            return i;
        }
    }
    return 0;
}