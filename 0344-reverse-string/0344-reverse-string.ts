/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let leftIndex = 0 // Start from the beginning of the string
    let rightIndex = s.length - 1 // Start from the end of the string

    // Continue swapping characters while the left index is less than or equal to the right index
    while (leftIndex <= rightIndex) {
        // Swap the characters at the left and right indeces
        [s[leftIndex], s[rightIndex]] = [s[rightIndex], s[leftIndex]]

        // Move the left index one step towards the right
        leftIndex++
        // Move the right index one step towards the left
        rightIndex--
    }
};