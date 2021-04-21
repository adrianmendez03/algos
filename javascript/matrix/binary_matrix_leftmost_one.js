// You are given a two-dimensional list of integers matrix which contains 1s and 0s. Given that each row is sorted in ascending
// order with 0s coming before 1s, return the leftmost column index with the value of 1. If there's no row with a 1, return -1.

class Solution {
    solve(matrix) {
        if (matrix.length === 0) {
            return -1
        }
        let left = matrix[0].length, found = false
        for (let i = 0; i < matrix.length; i++) {
            let j = matrix[i].length - 1
            while (matrix[i][j] === 1) {
                j--
            }
            if (j + 1 < left) {
                found = true
                left = j + 1
            }
        }
        return found ? left : -1
    }
}

class Solution {
    solve(matrix) {
        let ans = -1, row = 0, col = matrix[0] ? matrix[0].length - 1 : 0
        while (row < matrix.length && col >= 0) {
            if (matrix[row][col] == 1) {
                ans = col
                col--
            } else {
                row++
            }
        }
        return ans
    }
}