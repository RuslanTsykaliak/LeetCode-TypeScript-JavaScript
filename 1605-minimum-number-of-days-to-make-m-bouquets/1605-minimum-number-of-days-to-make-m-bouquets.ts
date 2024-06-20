function minDays(bloomDay: number[], m: number, k: number): number {
    if (m * k > bloomDay.length) return -1;
    let [left, right] = [Math.min(...bloomDay), Math.max(...bloomDay)];

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let [bouquets, flowers] = [0, 0];

        for (let day of bloomDay) {
            if (day <= mid) {
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