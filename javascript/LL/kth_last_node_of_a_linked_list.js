// Given a singly linked list node, return the value of the kth last node (0-indexed). 
// k is guaranteed not to be larger than the size of the linked list.

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */

 class Solution {
    solve(node, k) {
        let leader = node, follower = node

        for (let i = 0; i < k; i++) {
            leader = leader.next
        }
        
        while (leader.next) {
            leader = leader.next
            follower = follower.next
        }
        
        return follower.val
    }
}