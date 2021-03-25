class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums) <= 1 : return False
        
        digits = dict()
        
        for num in nums:
            if num in digits:
                return True
            else:
                digits[num] = 1
                
        return False