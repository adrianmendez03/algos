class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t) : return False
        
        letterMap = dict()
        
        for i in range(len(s)):
            if s[i] in letterMap:
                if t[i] != letterMap.get(s[i]) : return False
            else:
                if t[i] in letterMap.values(): return False
                letterMap[s[i]] = t[i]
                
        return True