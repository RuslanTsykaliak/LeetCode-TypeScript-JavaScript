class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        left=1
        right=max(nums)
        while(left<=right):
            mid=(left+right)//2
            count=0
            for e in nums:
                count+=((math.ceil(e/mid))-1)
            if count>maxOperations:
                left=mid+1
            else:
                right=mid-1
        return (left)