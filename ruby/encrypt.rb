def rot13(string)
    string = string.split("")
    # loop through string
    string.each_with_index do | char, index |
      # checking if char is a capital letter
      # if it isn't we don't do anything
      if char.ord >= 65 && char.ord <= 90 
        # checks for overflow
        new_char = (char.ord + 13) % 90
        # if overflow doesn't exist continue
        if new_char >= 65 && new_char <= 90
          string[index] = new_char.chr
        # if overflow exist then start at the 
        # beginning (64) 
        else
          # special case 90 % 90 == 0 
          # 90 is "Z"
          if new_char == 0
            string[index] = "Z"
          else
            string[index] = (new_char + 64).chr
          end
        end
      end
    end
  
    # string is currently an array so make it 
    # back into a string
    string.join
  end
  
  p rot13("SERR PBQR PNZC")
  p rot13("SERR CVMMN!")