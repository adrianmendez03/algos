// Given a list of integers nums, sort the list in the following way:

// First number is the maximum
// Second number is the minimum
// Third number is the 2nd maximum
// Fourth number is the 2nd minimum
// And so on.

class Solution {
    solve(nums) {
        nums = nums.sort((a, b) => a - b) 
        const output = []
        let i = 0, j = nums.length - 1
        while (i <= j) {
            if (output.length % 2 !== 0) {
                output.push(nums[i])
                i++
            } else {
                output.push(nums[j])
                j--
            }
        }
        return output
    }
}