function shortestSubarray(nums: number[], k: number): number {
    const prefixSum = new Array(nums.length + 1).fill(0);
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }

    let left = 1;
    let right = nums.length;
    while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (hasWindow(prefixSum, mid, k)) {
            right = mid;
            continue;
        }
        left = mid;
    }

    if (hasWindow(prefixSum, left, k)) {
        return left;
    }
    if (hasWindow(prefixSum, right, k)) {
        return right;
    }
    return -1;
}

function hasWindow(prefixSum: number[], windowSize: number, target: number) {
    const windowOnPrefixSum = windowSize + 1;
    let iq = [];

    let slow = 0;
    for (let fast = 0; fast < prefixSum.length; fast++) {
        const num = prefixSum[fast];

        while (iq.length && iq[iq.length - 1] > num) {
            iq.pop();
        }
        iq.push(num);

        while (fast - slow + 1 > windowOnPrefixSum) {
            let slowN = prefixSum[slow];
            if (iq[0] === slowN) {
                iq.shift();
            }
            slow += 1;
        }

        const min = iq[0];
        if (num - min >= target) {
            return true;
        }
    }

    return false;
}