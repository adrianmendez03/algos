// Given a complete binary tree root, return the number of nodes in the tree.

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

        return 1 + left + right
    }
}