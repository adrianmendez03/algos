# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        
        if head is None:
            return head
        
        prev = None
        curr = head
        nxt = head.next
        
        while curr.next:
            curr.next = prev
            prev = curr
            curr = nxt
            nxt = curr.next
            
            
        curr.next = prev
        return curr