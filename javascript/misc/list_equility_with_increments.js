// You are given a list of integers nums, and want to make the values equal. 
// Consider an operation where you pick an integer in the list and increment every other value .
//Return the minimum number of operations required to make integer values equal.

class Solution {
    solve(nums) {
        const length = nums.length
        const min = Math.min(...nums)
        return nums.reduce((a, b) => a + b) - min * length
    }
}