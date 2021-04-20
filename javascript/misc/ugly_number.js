class Solution {
    solve(n) {
        const primes = [2, 3, 5]
        for (let prime of primes) {
            while (n > 1 && n % prime === 0) {
                n = n / prime
            }
        }
        return n === 1
    }
}