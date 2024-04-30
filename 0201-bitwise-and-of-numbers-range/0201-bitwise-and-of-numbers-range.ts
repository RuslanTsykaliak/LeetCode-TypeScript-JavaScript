function rangeBitwiseAnd(left: number, right: number): number {
    let shift = 0
    // Find the common prefix
    while (left < right) {
        left >>= 1
        right >>= 1
        ++shift
    }
    return left << shift
};