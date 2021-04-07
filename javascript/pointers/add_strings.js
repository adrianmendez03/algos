class Solution {
    solve(a, b) {
        let p1 = a.length - 1, p2 = b.length - 1
        let carry = 0
        const sum = []
        while (p1 >= 0 || p2 >= 0) {
            const val1 = p1 >= 0 ? parseInt(a[p1]) : 0
            const val2 = p2 >= 0 ? parseInt(b[p2]) : 0
            const value = (val1 + val2 + carry) % 10
            carry = Math.floor((val1 + val2 + carry) / 10)
            sum.unshift(value)
            p1--, p2--
        }
        if (carry) {
            sum.unshift(carry)
        }
        return sum.join('')
    }
}