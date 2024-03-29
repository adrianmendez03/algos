# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        
        p1 = l1
        p2 = l2
        
        currentCarry = 0 
        
        head = current = ListNode(0)
        
        while p1 or p2 or currentCarry :
            
            currentVal = currentCarry 
            currentVal += 0 if p1 is None else p1.val
            currentVal += 0 if p2 is None else p2.val
            
            if currentVal >= 10 :
                currentVal -= 10
                currentCarry = 1
            else :
                currentCarry = 0
            
            current.next = ListNode(currentVal)
            current = current.next
            
            if p1 is None and p2 is None :
                break
            elif p1 is None :
                p2 = p2.next 
            elif p2 is None :
                p1 = p1.next
            else :
                p1 = p1.next 
                p2 = p2.next
                
        return head.next 