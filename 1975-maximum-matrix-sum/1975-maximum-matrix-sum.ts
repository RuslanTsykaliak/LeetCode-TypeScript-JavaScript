function maxMatrixSum(matrix: number[][]): number {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    let minNum = Infinity;
    let numNegatives = 0;
    let sum = 0;

    for (let x = 0; x < ROWS; x++) {
        for (let y = 0; y < COLS; y++) {
            let num = matrix[x][y];
            if (num < 0) numNegatives = (numNegatives + 1) % 2;

            let absNum = Math.abs(num);

            sum += absNum;
            minNum = Math.min(minNum, absNum);
        }
    }

    return numNegatives % 2 === 0 ? sum : sum - minNum * 2;
};