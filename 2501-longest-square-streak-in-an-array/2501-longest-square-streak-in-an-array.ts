function longestSquareStreak(nums: number[]): number {
    let set = new Set(nums);
    let longeststreak = -1;
    set.forEach((e) => {
        let currnum = e * e;
        let newstreak = -1;
        while (true) {
            if (set.has(currnum)) {
                newstreak = newstreak === -1 ? 2 : newstreak + 1;
                currnum = currnum * currnum;
            } else {
                break;
            }
        }
        longeststreak = Math.max(longeststreak, newstreak)
    })
    return longeststreak;
};