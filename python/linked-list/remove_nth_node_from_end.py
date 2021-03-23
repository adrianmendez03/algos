# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        if head.next is None:
            return head.next
        
        curr = head
        
        for node in range(n):
            curr = curr.next 
            
        prev = None
        
        if curr:
            prev = head
            curr = curr.next
            while curr:
                prev = prev.next
                curr = curr.next
                
        if prev:
            prev.next = prev.next.next
        else:
            head = head.next
        
        return head