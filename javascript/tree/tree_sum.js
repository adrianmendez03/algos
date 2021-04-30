// Given a binary tree root, return the sum of all values in the tree.

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
    solve(root) {
        if (!root) {
            return 0
        }

        const left = this.solve(root.left)
        const right = this.solve(root.right)

        return root.val + left + right
    }
}