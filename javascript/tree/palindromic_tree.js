// Given a binary tree root where each node contains a digit from 0-9, return whether its in-order traversal is a palindrome.

// Bonus: solve in \mathcal{O}(h)O(h) space where h is height of the tree.

/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */

 class Solution {
    arr = []
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            this.arr.push(root.val)
            this.inOrder(root.right)
        }
    }

    solve(root) {
        this.inOrder(root)
        let i = 0, j = this.arr.length - 1
        while (i < j) {
            if (this.arr[i] !== this.arr[j]) {
                return false
            }
            i++, j--
        }
        return true
    }
}