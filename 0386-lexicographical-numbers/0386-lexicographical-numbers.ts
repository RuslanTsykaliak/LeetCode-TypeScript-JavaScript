function lexicalOrder(n: number): number[] {
    function pushFromTo(start, end) {
        /* essentially this function pushes every integer between start and
        end to the results array and breaks whenever either the end or n is reached */
        while (start <= end && start <= n) {
            result.push(start);

            /* The nesting occurs, new iterations are attempted within this
            step utilizing the observed pattern*/
            pushFromTo(start * 10, start * 10 + 9)

            start++
        }

    }

    var result = [];

    /* start the recursion */
    pushFromTo(1, 9);

    return result;
};