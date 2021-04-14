//You are given a list of integers nums representing stock prices of a company in chronological order. You can buy at most one share of stock per day, 
//but you can hold onto multiple stocks and can sell stocks on any number of days. Return the maximum profit you can earn.

class Solution {
    solve(nums) {
        let max = 0, profit = 0
        for (let i = nums.length - 1; i >= 0; i--) {
            max = Math.max(max, nums[i])
            profit += max - nums[i]
        }
        return profit
    }
}