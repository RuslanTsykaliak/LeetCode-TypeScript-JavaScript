// This function calculates the maximum score you can achieve with a bag of tokens.
function bagOfTokensScore(tokens: number[], power: number): number {
    // Sort the tokens in ascending order.
    tokens.sort((a, b) => a - b);

    // Initialize two pointers at the start (upIdx) and end (downIdx) of the array.
    let upIdx = 0, downIdx = tokens.length - 1; 

    // Initialize the score to 0.
    let score = 0;

    // Continue until there's not enough power to take the token at upIdx.
    while (power >= tokens[upIdx]) {
        // Increase the score by 1 and decrease the power by the value of the token at upIdx.
        score++;
        power -= tokens[upIdx];
        upIdx++;

        // While there's not enough power to take the token at upIdx and upIdx is less than downIdx,
        // decrease the score by 1 and increase the power by the value of the token at downIdx.
        while (power < tokens[upIdx] && upIdx < downIdx) {
            score--;
            power += tokens[downIdx];
            downIdx--;
        }
    }

    // Return the maximum score.
    return score;
};
