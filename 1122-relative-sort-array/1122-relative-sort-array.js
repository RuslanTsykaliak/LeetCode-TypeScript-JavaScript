/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    // Create a sortOrderMap that assigns an index to each element in arr2.
    // This index will represent the sort order for the elements in arr1.
    const sortOrderMap = Object.fromEntries(arr2.map((num, index) => [num, index]));

    // Sort arr1 by comparing elements based on their sortOrderMap values.
    // If an element is not found in sortOrderMap (i.e., it's not in arr2),
    // it will be assigned a sort order that places it at the end of arr1,
    // sorted in ascending order.
    return arr1.sort((a, b) =>
        // If 'a' is in arr2, use its sortOrderMap index, otherwise use
        // arr2.length + a to ensure it's placed at the end and sorted by value.
        (sortOrderMap[a] ?? arr2.length + a) -
        // Apply the same logic for 'b'.
        (sortOrderMap[b] ?? arr2.length + b));
};