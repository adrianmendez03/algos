class Solution {
    solve(s, k) {
        const subs = {}
        let counter = 0
        for (let i = 0; i < s.length - k + 1; i++) {
            let sub = s.slice(i, i + k)
            if (subs[sub]) {
                subs[sub] += 1
            } else {
                subs[sub] = 1
            }
            if (subs[sub] === 2) {
                counter++
            }
        }
        return counter
    }
}