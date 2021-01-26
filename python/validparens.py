class Solution:
    def isValid(self, s: str) -> bool:
        
        if len(s) < 2 :
            return False
        
        PARENTHESES = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }
        
        stack = []
        
        for char in s : 
            if char in PARENTHESES : 
                stack.append(char) 
            else :
                if len(stack) == 0 :
                    return False
                else :
                    openParens = stack.pop()
                    if PARENTHESES[openParens] == char : 
                        continue
                    else :
                        return False
                
        if len(stack) > 0 :
            return False
        
        return True