# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        arr = []
        while head:
            arr.append(head.val)
            head = head.next
        
        power = len(arr) - 1
        total = 0
        
        for binary in arr:
            total += (binary * (2 ** power))
            power -= 1
        
        return total