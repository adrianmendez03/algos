// const rnaStrings = (str) => {
//   output = ""
//   rna = {
//     "A": "T",
//     "T": "A",
//     "C": "G",
//     "G": "C"
//   }
//   for (const char of str) {
//     output += rna[char]
//   }
//   return output
// }

// const rnaStrings = str => {
//   rna = {
//     "A": "T",
//     "T": "A",
//     "C": "G",
//     "G": "C"
//   }
//   str = str.split('')
//   str.map((char, index) => {
//     return str.splice(index, 1, rna[char])
//   })
//   return str.join('')
// }

const rnaStrings = str => {
    // GAT
    if (str === '') {
      return ''
    }
    else {
      //  G, A, T
      str = str.split('')
      // ''
      output = ''
      rna = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
      }
      output += rna[str[0]]
      // 'G'
      output += rnaStrings(str.slice(1).join(''))
      //'GCTA'
    }
    return output
  }
  
  str = "CGAT"
  rnaStrings(str)