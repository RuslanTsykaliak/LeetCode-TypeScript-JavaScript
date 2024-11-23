function rotateTheBox(box: string[][]): string[][] {
    const m = box.length;
    const n = box[0].length;

    for (const row of box) {
        let dropPos = n - 1;

        for (let currPos = n - 1; currPos >= 0; currPos--) {
            if (row[currPos] === '*') {
                dropPos = currPos - 1;
            } else if (row[currPos] === '#') {
                [row[dropPos], row[currPos]] = [row[currPos], row[dropPos]];
                dropPos--;
            }
        }
    }

    const rotatedBox: string[][] = Array(n).fill(0).map(() => Array(m).fill('.'));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotatedBox[j][m - 1 - i] = box[i][j];
        }
    }

    return rotatedBox;
}