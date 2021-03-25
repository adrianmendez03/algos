class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        if len(nums) == 1 : return nums[0]
        
        unique = set()
        for num in nums:
            if num in unique:
                unique.remove(num)
            else:
                unique.add(num)
        
        return unique.pop()