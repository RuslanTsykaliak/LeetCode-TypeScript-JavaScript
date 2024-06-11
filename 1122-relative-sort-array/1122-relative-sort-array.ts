function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const sortOrderMap = Object.fromEntries(arr2.map((num, index) => [num, index]));
    return arr1.sort((a, b) => (sortOrderMap[a] ?? arr2.length + a) - (sortOrderMap[b] ?? arr2.length + b));
};