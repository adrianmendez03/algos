// You are given an integer n representing n full beer bottles. 
// Given that you can exchange 3 empty beer bottles for 1 full beer bottle, return the number of beer bottles you can drink.



class Solution {
    recurse(n) {
        return n > 1 ? n + this.recurse(n / 3) : n
    }

    solve(n) {
        return Math.floor(n + this.recurse(n / 3))
    }
}