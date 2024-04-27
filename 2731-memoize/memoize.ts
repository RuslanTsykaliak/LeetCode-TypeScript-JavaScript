type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const map = new Map()
    return function(...args) {
        const key = JSON.stringify([...args])
        if (!map.get(key) && map.get(key) !== 0) {
            const result = fn(...args)
            map.set(key, result)
            return result
        }
        return map.get(key)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */