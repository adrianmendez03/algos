class Solution {
    solve(nums) {
        const sorted = nums.sort((a,b) => b - a)
        const num1 = nums[0] * nums[1] * nums[2]
        const num2 = nums[sorted.length - 1] * nums[sorted.length - 2] * nums[0]
        return Math.max(num1, num2)
    }
}