// You are given a binary tree root with each node containing single digits from 0 to 9. Each path from the root to the leaf represents a number with its digits in order.

// Return the sum of numbers represented by all paths in the tree.

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
    solve(root, sum = 0) {
        if (!root) return 0;
        sum = sum * 10 + root.val;
        if (!root.left && !root.right) {
            return sum;
        } else {
            return this.solve(root.left, sum) + this.solve(root.right, sum);
        }
    }
}