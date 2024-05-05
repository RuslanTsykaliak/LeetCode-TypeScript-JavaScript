// This function takes a binary string as input and returns the maximum odd binary number that can be formed using the same number of '1's in the input string.
function maximumOddBinaryNumber(s: string): string {
    // Get the length of the input string.
    let len = s.length, cnt = 0

    // Count the number of '1's in the input string.
    for (let i = 0; i < len; i++) {
        if (s[i] === '1') {
            cnt++
        }
    }

    // Initialize the answer string.
    let ans = ""

    // Add '1's to the answer string. The number of '1's is one less than the count of '1's in the input string.
    for (let i = 0; i < cnt - 1; i++) {
        ans += '1'
    }

    for (let i = 0; i < len - cnt; i++) {
        ans += '0'
    }

    // Add the last '1' to the answer string to make the binary number odd.
    ans += '1'

    // Return the maximum odd binary number.
    return ans
};