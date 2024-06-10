function heightChecker(heights: number[]): number {
    let sortedHeights: number[] = heights.slice().sort((a, b) => a - b);
    let outOfOrderCount: number = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            outOfOrderCount++;
        }
    }

    return outOfOrderCount;
};