function minOperations(logs: string[]): number {
    let stack = new Array();

    logs.map((log) => {
        if (log === "../" && stack.length > 0) {
            stack.pop();
        } else if (log !== "./" && log !== "../") {
            stack.push(log);
        }
    })
    return stack.length;
};