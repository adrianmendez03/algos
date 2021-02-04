const validate = (password) => {
    if (password.length < 6){
      return false
    }
    let upper = false; 
    let lower = false; 
    let num = false; 
    for(let char of password){
        switch(true){
            case (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57):
                num = true;
                break;
            case (char === char.toLowerCase()):
                lower = true;
                break;
            case (char === char.toUpperCase()):
                upper = true;
                break;
            default:
                break;
        }
    }
    return upper && lower && num; 
}