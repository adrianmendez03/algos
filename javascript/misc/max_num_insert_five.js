class Solution {
    solve(n) {
        n = n.toString()
        const negative = n[0] === '-' ? true : false
        let i = negative ? 1 : 0
        if(negative) {
            while (n[i] <= 5) {
                i++
            }
        } else {
            while (n[i] >= 5) {
                i++
            }
        }
        let output = parseInt(n.slice(0, i) + '5' + n.slice(i))
        return output
    }
}