type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        // The toBe function checks if the input value is equal to the expected value
        toBe: (val2) => {
            if (val === val2) {
                return true
            } else {
                throw "Not Equal"
            }
        },
        // The notToBe function checks if the input value is not equal to the expected value
        notToBe: (val2) => {
            if (val !== val2) {
                return true
            } else {
                throw "Equal"
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */