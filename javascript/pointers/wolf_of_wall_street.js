// Given a list of integers prices representing the stock prices of a company 
// in chronological order, return the maximum profit you could have made from 
// buying and selling that stock once.

// You must buy before you can sell it.

class Solution {
    solve(prices) {
        let max = 0, profit = 0 
        for (let i = prices.length - 1; i >= 0; i--) {
            if (max < prices[i]) {
                max = prices[i]
            } else {
                let temp = max - prices[i]
                if (temp > profit) {
                    profit = temp
                }
            }
        }
        return profit
    }
}