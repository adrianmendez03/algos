class Solution {
    solve(nums) {
        const total = nums.reduce((total, num) => total + num)
        let leftSum = 0
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const rightSum = total - (leftSum + num)
            if (leftSum === rightSum) {
                return i
            }
            leftSum += num
        }
        return -1
    }
}