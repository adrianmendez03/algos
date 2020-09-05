class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sub_sum = 0                            
        max_sum_seen = nums[0]          
        for num in nums:                
            sub_sum += num              

            if sub_sum > max_sum_seen :
                max_sum_seen = sub_sum  
            
            if sub_sum < 0 :                            
                sub_sum = 0             
        
        return max_sum_seen