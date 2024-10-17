function maximumSwap(num: number): number {
    let arr = num.toString().split("");
    let max = -1;
    let maxInd = -1;
    let leftInd = -1;
    let rightInd = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (max < Number(arr[i])) {
            max = Number(arr[i]);
            maxInd = i;
        } else if (max > Number(arr[i])) {
            leftInd = i;
            rightInd = maxInd;
        }
    }

    if (leftInd == -1) {
        return num;
    }
    [arr[leftInd], arr[rightInd]] = [arr[rightInd], arr[leftInd]];
    return Number(arr.join(""));
};