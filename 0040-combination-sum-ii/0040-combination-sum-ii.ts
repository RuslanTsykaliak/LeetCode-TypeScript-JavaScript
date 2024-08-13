function combinationSum2(candidates: number[], target: number): number[][] {

    const res: number[][] = []
    candidates.sort((a, b) => a - b)
    dfs(0, target, [])
    return res

    function dfs(startIndex: number, remainingSum: number, subset: number[]) {
        if (remainingSum === 0) {
            res.push([...subset]);
            return;
        }

        if (remainingSum < 0)
            return;


        for (let i = startIndex; i < candidates.length; i++) {
            //IMPORTANT: use i > startIndex, NOT i > 0, since we don't want to repeat from the 2nd poistion in the current range
            //not from beginning
            if (i > startIndex && candidates[i] === candidates[i - 1])
                continue;

            let curNum = candidates[i];

            subset.push(curNum);
            dfs(i + 1, remainingSum - curNum, subset);
            subset.pop();
        }
    }
};