function diffWaysToCompute(expression: string): number[] {

    function compute() {
        if (Number.isInteger(Number(expression))) {
            return [Number(expression)];
        }

        let result = [];

        if (memo[expression]) {
            return memo[expression];
        }

        for (let i = 0; i < expression.length; i++) {
            let operator = expression[i];

            if (Number.isNaN(Number(operator))) {
                let leftResults = diffWaysToCompute(expression.slice(0, i));
                let rightResults = diffWaysToCompute(expression.slice(i + 1));

                for (let left of leftResults) {
                    for (let right of rightResults) {
                        result.push(
                            operator === '+'
                                ? left + right
                                : operator === '-'
                                    ? left - right
                                    : left * right
                        );
                    }
                }
            }
        }
        memo[expression] = result;
        return result;
    }

    let memo = {};
    return compute();
};