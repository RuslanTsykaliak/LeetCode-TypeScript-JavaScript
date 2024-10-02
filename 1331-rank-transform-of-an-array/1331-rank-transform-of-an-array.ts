function arrayRankTransform(arr: number[]): number[] {
    const rankMap = {};
    [...new Set(arr)].sort((a, b) => a - b).forEach((e, i) => rankMap[e] = i);
    return arr.map(e => rankMap[e] + 1);
};