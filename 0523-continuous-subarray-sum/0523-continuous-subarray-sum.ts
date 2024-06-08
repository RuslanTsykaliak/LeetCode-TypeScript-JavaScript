function checkSubarraySum(nums: number[], k: number): boolean {
    // good = length at least two, sum is a multiple of k
    let sum = 0;
    let remainderMap = new Map();
    remainderMap.set(0, -1)
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        let r = sum % k;

        if(remainderMap.has(r)){
            let l = i - remainderMap.get(r);
            if(l >= 2){
                return true;
            }
        } else{
            remainderMap.set(r, i);
        }
    }

    return false;

};