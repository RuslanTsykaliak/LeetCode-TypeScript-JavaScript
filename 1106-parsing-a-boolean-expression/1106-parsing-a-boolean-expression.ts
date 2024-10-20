function parseBoolExpr(expression: string): boolean {
    // Store the input expression
    const expr = expression;
    // Get the length of the expression
    const n = expr.length;
    // Initialize a pointer to traverse the expression
    let i = 0;

    // Define a recursive depth-first search function
    const dfs = () => {
        // Array to store boolean results of sub-expressions
        let res: boolean[] = [];

        // Traverse the expression
        while (i < n) {
            // Get the current character and move the pointer
            const c = expr[i++];

            // If we encounter a closing parenthesis, end this sub-expression
            if (c === ')') {
                break;
            }

            // Handle different operators and values
            if (c === '!') {
                // NOT operator: negate the result of the next sub-expression
                res.push(!dfs()[0]);
            } else if (c === '|') {
                // OR operator: true if any sub-expression is true
                res.push(dfs().some(v => v));
            } else if (c === '&') {
                // AND operator: true if all sub-expressions are true
                res.push(dfs().every(v => v));
            } else if (c === 't') {
                // True value
                res.push(true);
            } else if (c === 'f') {
                // False value
                res.push(false);
            }
            // Note: Opening parenthesis '(' is implicitly handled by recursive calls
        }

        // Return the array of boolean results
        return res;
    };

    // Start the parsing process and return the final result
    // We take the first (and only) element of the result array
    return dfs()[0];
};