// Given a number n, return a list of all prime numbers smaller than or equal to n in ascending order.

class Solution {
    solve(n) {
        const primes = new Array(n + 1).fill(true)
        primes[0] = false
        primes[1] = false

        for (let num = 2; num * num <= n; num++) {
            if (!primes[num]) {
                continue
            }
            for (let multiplier = 2; multiplier * num <= n; multiplier++) {
                primes[multiplier * num] = false
            }
        }

        const output = []
        primes.filter((bool, index) => {
            if (bool) {
                output.push(index)
            }
        })
        
        return output
    }
}