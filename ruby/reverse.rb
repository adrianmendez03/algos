def reverse_arr(arr)
    p 'called'
    i = 0
    j = arr.length - 1
    while i < j
        swapped = swap(arr[i], arr[j])
        arr[i] = swapped[0]
        arr[j] = swapped[1]
        i += 1
        j -= 1
    end
    return arr
end

def swap(a, b)
    temp = a
    a = b
    b = temp
    return [a, b]
end

p reverse_arr([1, 2, 3, 4, 5])