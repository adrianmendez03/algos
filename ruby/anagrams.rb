def anagrams?(word1, word2)
    if (word1.length != word2.length)
      return false
    end
  
    word1.downcase!
    word2.downcase!
  
    return (createHash(word1) == createHash(word2))
  end
  
  def createHash(word)
    hash = {}
    word = word.split('')
    for char in word do
      if (hash[char])
        hash[char] += 1
      else
        hash[char] = 1
      end
    end
    p hash 
    return hash
  end
  
  puts anagrams?("cat", "act")
  puts anagrams?("restful", "fluster")  
  puts anagrams?("cat", "dog")      
  puts anagrams?("boot", "bootcamp")