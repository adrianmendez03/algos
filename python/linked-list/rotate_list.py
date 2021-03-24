# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        # Base condition - when empty LL or one node in LL
        if not head or not head.next:
            return head
        # Length of the LL
        size = 1
        t_head = head
        
        # Finding the length of LL
        while t_head.next:
            t_head = t_head.next
            size += 1
        
        # Tail pointer
        tail = t_head
        
        # Connecting the tail to the head.  Making a circular LL
        tail.next = head
        t_head = head
        k = k % size
        
        # Iterate and stop before the (size - k)th Node
        for i in range(size - k - 1):
            t_head = t_head.next
        
        # The next node of t_head is the answer
        head = t_head.next
        
        # Remove the link. To avoid Infinite loops
        t_head.next = None
        
        return head