function findKthNumber(n: number, k: number): number {
    let curr = 1;
    k--;

    while (k > 0) {
        let steps = calculateSteps(n, curr, curr + 1);
        if (steps <= k) {
            curr++;
            k -= steps;
        } else {
            curr *= 10;
            k--;
        }
    }

    return curr;
}

function calculateSteps(n: number, n1: number, n2: number): number {
    let steps = 0;
    while (n1 <= n) {
        steps += Math.min(n + 1, n2) - n1;
        n1 *= 10;
        n2 *= 10;
    }
    return steps;
};