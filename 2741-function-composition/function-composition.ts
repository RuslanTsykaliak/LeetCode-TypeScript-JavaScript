type F = (x: number) => number;

const compose = (functions: F[]): F => {
    return function(x) {
        if(!functions.length) {
            return x
        }

        let number = x

        functions
            .reverse()
            .forEach((callback) => {
                number = callback(number)
        })

        return number
    }
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */