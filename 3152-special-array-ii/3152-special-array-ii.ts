function isArraySpecial(input: number[], queries: number[][]): boolean[] {
    const backwardLengthSpecialSubarrays = createBackwardLengthSpecialSubarrays(input);
    return createSpecialSubarraysPerQuery(backwardLengthSpecialSubarrays, queries);
};

function isPairWithDifferentParity(first: number, second: number): boolean {
    return (first & 1) !== (second & 1);
}

function createBackwardLengthSpecialSubarrays(input: number[]): number[] {
    const backwardLengthSpecialSubarrays = new Array(input.length);
    let start = 0;

    for (let end = 1; end < input.length; ++end) {
        backwardLengthSpecialSubarrays[end - 1] = end - start;
        if (!isPairWithDifferentParity(input[end], input[end - 1])) {
            start = end;
        }
    }
    backwardLengthSpecialSubarrays[input.length - 1] = input.length - start;

    return backwardLengthSpecialSubarrays;
}

function createSpecialSubarraysPerQuery(backwardLengthSpecialSubarrays: number[], queries: number[][]): boolean[] {
    const specialSubarraysPerQuery = new Array(queries.length);
    for (let i = 0; i < queries.length; ++i) {
        specialSubarraysPerQuery[i] = isInRangeOfSpecialSubarray(backwardLengthSpecialSubarrays, queries[i][0], queries[i][1]);
    }
    return specialSubarraysPerQuery;
}

function isInRangeOfSpecialSubarray(backwardLengthSpecialSubarrays: number[], start: number, end: number): boolean {
    return end - start + 1 <= backwardLengthSpecialSubarrays[end];
}