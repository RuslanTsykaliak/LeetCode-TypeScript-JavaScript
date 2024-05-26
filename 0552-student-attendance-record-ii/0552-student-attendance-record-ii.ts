// This function checks the record and returns a number
function checkRecord(n: number): number {
    // MOD is a constant used for the modulus operation
    const MOD = 1e9 + 7;
    // cnt is an array that holds the initial values
    let cnt = [1, 1, 0, 1, 0, 0];
    // Loop from 1 to n
    for (let i = 1; i < n; i++)
        // Update the cnt array in each iteration
        cnt = [
            (cnt[0] + cnt[1] + cnt[2]) % MOD, // New value for cnt[0]
            cnt[0], // New value for cnt[1]
            cnt[1], // New value for cnt[2]
            (cnt[0] + cnt[1] + cnt[2] + cnt[3] + cnt[4] + cnt[5]) % MOD, // New value for cnt[3]
            cnt[3], // New value for cnt[4]
            cnt[4] // New value for cnt[5]
        ];
    // Return the sum of all elements in cnt array modulo MOD
    return (cnt[0] + cnt[1] + cnt[2] + cnt[3] + cnt[4] + cnt[5]) % MOD;
};
