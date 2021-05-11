// You are given n people represented as an integer from 0 to n - 1, and a list of friends tuples, where person friends[i][0] and person friends[i][1] are friends.

// Return whether everyone has at least one friend.

class Solution {
    solve(n, friends) {
        const people = new Set()
        for (let connections of friends) {
            for (let person of connections) {
                people.add(person)
            }
        }

        return n === people.size
    }
}