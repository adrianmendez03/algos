// You are given a string s containing digits from 0 to 9. Return whether there 
// is some arrangement where we can have one pair of the same digits and the rest 
// of the numbers form any number of triples of the same digits.



class Solution {
    solve(s) {
        const hash = {}
        for (let num of s) {
            if (hash[num]) {
                hash[num] += 1
            } else {
                hash[num] = 1
            }
        }
        let pair = false, triple = true
        for (let num in hash) {
            while (hash[num] > 0) {
                hash[num] -= 3
            }
            if (pair) {
                if (hash[num] !== 0) {
                    triple = false
                }
            }
            if(hash[num] === 1) {
                pair = true
            } else if (hash[num] === 2) {
                triple = false
            }
        }
        return pair && triple
    }
}