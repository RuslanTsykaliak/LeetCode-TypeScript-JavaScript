type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    const arr = [...args]
    return arr.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */