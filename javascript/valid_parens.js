const validParens = str => {
  if (str.length % 2 !== 0) {
    return false
  }
  
  const PAIRS = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  const stack = []
  for (char of str) {
    if (PAIRS[char]) {
      stack.push(char)
      console.log(stack)
    } else {
      if (stack.length === 0) {
        return false
      } else {
        const open = stack.pop()
        console.log(stack)
        if (PAIRS[open] === char) {
          continue
          // see if they're valid
        } else {
          return false
        }
      }
    } 
  }
  return true
}

// const validParens = str => {
//     if (str.length % 2 !== 0) {
//       return false
//     }
//     const PAIRS = {
//       "(": ")",
//       "[": "]",
//       "{": "}"
//     }
//     let i = 0, j = str.length - 1
//     while (i < j) {
//       if (PAIRS[str[i]] === str[j]) {
//         i++
//         j--
//       } else {
//         return false
//       }
//     }
//     return true
//   }
  
  validParens("({[]})")