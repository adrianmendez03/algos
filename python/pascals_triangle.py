def generate(numRows):
    if numRows == 0 : return []
    triangle = [[1]]
    while len(triangle) < numRows:
        prevRow = triangle[-1]
        triangle.append(generate_new_row(prevRow))
  
    return triangle

def generate_new_row(prevRow):
    newRow = [1,1]
    for i in range(1, len(prevRow)):
        value = prevRow[i] + prevRow[i - 1]
        newRow.insert(i, value)
    return newRow   