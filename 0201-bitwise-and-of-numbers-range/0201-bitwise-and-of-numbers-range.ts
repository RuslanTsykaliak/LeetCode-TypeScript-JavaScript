function rangeBitwiseAnd(left: number, right: number): number {
    // Calculate the difference in binary length between 'right' and 'left'
    // If 'left' and 'right' are the same, the difference is 0
    const diffLength = left === right ? 0 : (right - left).toString(2).length;
    // Shift 'left' and 'right' to the right by 'diffLength' bits, then shift them back to the left
    // This effectively zeroes out the last 'diffLength' bits of 'left' and 'right'
    // The bitwise AND of the resulting numbers is the same as the bitwise AND of all numbers in the range
    return (left >> diffLength << diffLength) & (right >> diffLength << diffLength);
};
