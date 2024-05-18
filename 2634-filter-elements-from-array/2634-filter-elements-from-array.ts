type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    // Use the built-in filter method of the array to filter the elements
    // The filter method will call the provided function for each element of the array
    // If the function returns true, the element will be included in the result
    return arr.filter(fn)
};