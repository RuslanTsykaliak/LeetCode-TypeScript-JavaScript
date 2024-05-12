function createCounter(n: number): () => number {
    // Return a function that increments the counter and returns the new value
    return function () {
        return n++
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */