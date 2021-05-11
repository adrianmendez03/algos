// Given a string s containing brackets "(" and ")", return the length of the longest subsequence of balanced brackets.

class Solution {
    solve(s) {
        const stack = []
        let pairs = 0

        for (let paren of s) {
            if (paren === ')') {
                if (stack.pop()) {
                    pairs++
                }
            } else {
                stack.push(paren)
            }
        }

        return pairs * 2
    }
}
// KEY POINTS:
// ADD OPEN LEFTS TO A STACK
// WHEN WE SEE A COMPLIMENATRY CLOSER WE REMOVE ONE FROM STACK
// INCREMENT THE PAIRS WE REMOVED
// RETURN PAIRS * 2