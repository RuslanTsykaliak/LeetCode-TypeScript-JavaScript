function minDays(bloomDay: number[], m: number, k: number): number {
    if (m * k > bloomDay.length) {
        return -1;
    }

    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let bouquets = 0;
        let flowers = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }

        if (bouquets >= m) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};