class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        curr = head 
        dictionary = {}
        
        while curr:
            if curr.next not in dictionary:
                dictionary[curr] = 0
                curr = curr.next
            else:
                return True
        
        return False