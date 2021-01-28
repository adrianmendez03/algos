const addThis = (num) => {
    // checks if num is one digit
    if (num < 10) {
      return num
    }
    let sum = 0
    num = num.toString()
    // accessing values from left to right
    for (let digit of num) {
      // +digit allows us to add a string to a number
      // while keeping sum a number
      sum += +digit 
    }
    // keeps calling until num is one digit 
    return addThis(sum)
  }
  
  addThis(12345)