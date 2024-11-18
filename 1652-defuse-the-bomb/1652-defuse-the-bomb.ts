function decrypt(code: number[], k: number): number[] {
    const ans: number[] = new Array(code.length).fill(0);
    let len: number = code.length;
    if (k > 0) {
        for (let i = 0; i < len; i++) {
            let count: number = 0;
            let j: number = i + 1;
            while (count < k) {
                if (j == len) j = 0;
                ans[i] += code[j];
                count++;
                j++;
            }
        }
    }
    if (k < 0) {
        for (let i = 0; i < len; i++) {
            let count: number = 0;
            let j: number = i - 1;
            while (count > k) {
                if (j == -1) j = len - 1;
                ans[i] += code[j];
                count--;
                j--;
            }
        }
    }
    return ans;
};