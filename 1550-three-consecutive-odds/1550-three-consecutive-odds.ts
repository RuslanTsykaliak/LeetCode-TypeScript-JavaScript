function threeConsecutiveOdds(arr: number[]): boolean {
    let count = 0;

    for (let num of arr) {
        if (num % 2 !== 0) {
            count++;
            if (count === 3) return true;
        } else {
            count = 0;
        }
    }
    return false;
};