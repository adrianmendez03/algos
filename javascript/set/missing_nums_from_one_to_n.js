class Solution {
    solve(nums) {

        const s = new Set(nums)
        const output = []

        for (let i = 1; i <= nums.length; i++) {
            if (!s.has(i)) {
                output.push(i)
            }
        }

        return output
        
    }
}