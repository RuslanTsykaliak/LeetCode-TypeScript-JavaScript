function minimizedMaximum(n: number, quantities: number[]): number {
    let low = 0;
    let high = Math.max(...quantities);
    function canDistribute(k: number, n: number, goods: number[]): boolean {
        let res = 0;
        for (let i = 0; i < goods.length; i++) {
            res += Math.ceil(goods[i] / k);
        }
        return res <= n;
    }
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canDistribute(mid, n, quantities)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};