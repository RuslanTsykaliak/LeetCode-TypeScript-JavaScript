function findJudge(n: number, trust: number[][]): number {
  // create an array to store the net trust gain for each person
  let netTrustGain = new Array(n + 1).fill(0);

  // iterate through the trust array and update the net trust gain
  for (let [a, b] of trust) {
    netTrustGain[a]--; // person a trusts person b, so decrease their net trust gain by 1
    netTrustGain[b]++; // person b is trusted by person a, so increase their net trust gain by 1
  }

  // check if there is any person who has a net trust gain of n - 1
  for (let i = 1; i <= n; i++) {
    if (netTrustGain[i] === n - 1) {
      return i; // this is the town judge
    }
  }

  // no town judge exists
  return -1;
}
