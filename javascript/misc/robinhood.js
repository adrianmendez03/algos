// You are given integers n, e, o, t. You have n dollars in principal 
// that you invested in the stock market. Given the stock market alternates 
// between first returning e and then o percent interest per year, return 
// how many years it would take to reach at leastt dollars.

class Solution {
    solve(n, e, o, t) {
        let i = 0 
        while (n < t) {
            if (i % 2 === 0) {
                n += n * (e / 100)
            } else {
                n += n * (o / 100)
            }
            i++
        }
        return i
    }
}