function equalSubstring(s: string, t: string, maxCost: number): number {
    // Initialize cost, left pointer, and right pointer
    let cost = 0
    let left = 0
    let right = 0

    // Calculate the absolute difference in ASCII values for each character in s and t
    const costs = s.split("").reduce((acc, char, i) => {
        let $ = 0
        $ += Math.abs(char.charCodeAt(0) - t.charCodeAt(i))
        acc.push($)
        return acc
    }, [])

    // Iterate over the string t
    while (right < t.length) {
        cost += costs[right]
        // If the total cost exceeds maxCost, subtract the cost of the character at the left pointer and move the left pointer to the right
        if (cost > maxCost) {
            cost -= costs[left]
            left++
        }
        // Move the right pointer to the right
        right++
    }
    // Return the maximum length of the substring
    return right - left
};