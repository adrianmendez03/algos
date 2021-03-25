class Solution:
    def isHappy(self, n: int) -> bool:
        if n == None : return False
        
        repeat = set()
        
        while True: 
            n = self.addSquaredNums(n)
            if n in repeat : return False
            elif n == 1 : return True
            else : repeat.add(n)
            
        
    def addSquaredNums(self, n: int) -> int:
        total = 0
        while n != 0:
            total += int(n % 10) ** 2
            n = int(n / 10)
            
        return total