function averageWaitingTime(customers: number[][]): number {
    let curTime = 0;
    let waiting = 0;

    for (let [arrival, time] of customers) {
        let cook = Math.max(curTime, arrival) + time;
        curTime = cook;
        waiting += cook - arrival;
    }
    return waiting / customers.length;
};