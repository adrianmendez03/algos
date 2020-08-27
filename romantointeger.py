class Solution:
    def romanToInt(self, s: str) -> int:
        dictionary = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        
        total = 0
        prevNumber = 0
        
        for char in s:
            
            total = total + dictionary[char]
            
            if dictionary[char] > prevNumber:
                total = total - (prevNumber * 2)
            
            prevNumber = dictionary[char]
            
        
        return total