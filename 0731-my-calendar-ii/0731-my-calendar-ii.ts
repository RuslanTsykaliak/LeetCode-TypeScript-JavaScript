class MyCalendarTwo {
    arr: number[]
    cnt: number[]
    constructor() {
        this.arr = [0]
        this.cnt = [0]
    }

    book(start: number, end: number): boolean {
        const bisect = (target: number): number => {
            let l: number = 0
            let h: number = this.arr.length - 1
            while (l <= h) {
                let m = Math.floor((l + h) / 2)
                if (this.arr[m] < target) {
                    l = m + 1
                } else {
                    h = m - 1
                }
            }

            if (l < this.arr.length && this.arr[l] == target)
                return l
            else {
                this.arr.splice(l, 0, target)
                this.cnt.splice(l, 0, this.cnt[l - 1])
            }
            return l
        }
        let s = bisect(start)
        let e = bisect(end)
        let i = 0
        for (i = s; i < e; i++) {
            if (this.cnt[i] == 2)
                return false
        }
        if (i == e) {
            for (i = s; i < e; i++) {
                this.cnt[i] += 1
            }
        }
        return true
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */