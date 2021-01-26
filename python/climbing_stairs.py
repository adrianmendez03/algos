class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1 :
            return 1
        
        two_steps_back = 1
        one_step_back = 2
        i = 3
        
        while i <= n :
            current_step = two_steps_back + one_step_back
            two_steps_back = one_step_back
            one_step_back = current_step
            i += 1
            
        return one_step_back