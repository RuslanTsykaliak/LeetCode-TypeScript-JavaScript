function maximumOddBinaryNumber(binaryString: string): string {

    // Initialize count to keep track of the number of '1's in the binary string.

    let onesCount = 0;


    // Iterate through each character of the binary string input.

    for (const character of binaryString) {

        // Increment the count for every '1' found.

        onesCount += character === '1' ? 1 : 0;

    }


    // Generate the maximum odd binary number by repeating '1' for (onesCount - 1) times,

    // followed by repeating '0' for (string length - onesCount) times, and then appending '1' at the end of the string.

    // This maximizes the number of '1' digits at the front, while ensuring the last digit is '1' for odd number.

    return '1'.repeat(onesCount - 1) + '0'.repeat(binaryString.length - onesCount) + '1';

}