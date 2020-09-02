class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        
        if needle == "" :
            return 0
        
        else :
            x = haystack.find(needle) 
            return x
        