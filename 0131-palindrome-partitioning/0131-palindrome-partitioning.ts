function partition(s: string): string[][] {
    // Initialize an empty array to store the result
    const result: string[][] = [];
    // Initialize an empty array to store the current partition path
    const path: string[] = [];

    // Helper function to check if a string is a palindrome
    const isPalindrome = (str: string): boolean => {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // Backtracking function to generate all valid partitions
    const backtrack = (start: number): void => {
        // If we've reached the end of the string, add the current path to the result
        if (start === s.length) {
            result.push([...path]);
            return;
        }
        // Explore all possible substrings starting from the current position
        for (let end = start + 1; end <= s.length; end++) {
            const substr = s.substring(start, end);
            // If the substring is a palindrome, add it to the path and continue exploring
            if (isPalindrome(substr)) {
                path.push(substr);
                backtrack(end);
                path.pop(); // Backtrack by removing the last added substring
            }
        }
    }

    // Start the backtracking process from the beginning of the string
    backtrack(0);
    return result;
}
