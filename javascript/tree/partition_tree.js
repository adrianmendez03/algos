// Given the root to a binary tree root, return a list of two numbers where the first number is the 
// number of leaves in the tree and the second number is the number of internal (non-leaf) nodes.

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
            return [0, 0]
        }
        
        if(!root.left && !root.right) {
            return [1, 0]
        }

        const left = this.solve(root.left)
        const right = this.solve(root.right)

        return [left[0] + right[0], left[1] + right[1] + 1]
    }
}