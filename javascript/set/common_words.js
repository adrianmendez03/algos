// Given two strings s0 and s1, each representing a sentence, 
// return the number of unique words that are shared between the two sentences.

class Solution {
    solve(s0, s1) {
        if(s0.length === 0 || s1.length === 0) {
            return 0
        }

        const h0 = new Set(s0.toLowerCase().split(' '))
        const h1 = new Set(s1.toLowerCase().split(' '))

        let counter = 0

        h0.forEach(word => {
            if (h1.has(word)) {
                counter++
            }
        })

        return counter
    }
}