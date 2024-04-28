function largestPerimeter(nums: number[]): number {
    while (nums.length >= 3) {
        const largestNumber = Math.max(...nums);
        const sumWithoutLargest = nums.reduce((acc, crr) => acc + crr) - largestNumber;
        if (largestNumber < sumWithoutLargest) {
            return sumWithoutLargest + largestNumber;
        }
        const largestIndex = nums.findIndex(n => n === largestNumber);
        nums.splice(largestIndex, 1);

    }
    return -1;

};