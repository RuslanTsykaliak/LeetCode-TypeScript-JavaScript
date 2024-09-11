function minBitFlips(start: number, goal: number): number {
    return (start ^ goal).toString(2).match(/1/g)?.length || 0;
}