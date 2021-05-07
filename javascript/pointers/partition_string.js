//Given a lowercase alphabet string s, partition s into as many pieces as possible such that each letter 
// appears in at most one piece and return the sizes of the partitions as a list.

class Solution {
    solve(s) {
        const hash = {}, output = []
        for (let i = 0; i < s.length; i++) {
            const letter = s[i]
            if(hash[letter]) {
                hash[letter][1] = i
            } else {
                hash[letter] = [i, null]
            }
        }

        let i = 0

        while (i < s.length) {
            let destination = hash[s[i]][1], partition = 1
            while (i < destination && destination) {
                partition++
                if (hash[s[i]][1] > destination) {
                    destination = hash[s[i]][1]
                }
                i++
            }
            output.push(partition)
            i++
        }

        return output
    }
}