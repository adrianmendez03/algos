// Given a list of sorted lists of integers, merge them into one large sorted list.

class Solution {
    mergeSort(arr) {
        if (arr.length > 1) {
            const mid = Math.floor(arr.length / 2) 

            const left = arr.slice(0, mid)
            const right = arr.slice(mid)

            this.mergeSort(left)
            this.mergeSort(right)

            let i = 0, j = 0, k = 0

            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    arr[k] = left[i]
                    i++
                } else {
                    arr[k] = right[j]
                    j++
                }
                k++
            }

            while (i < left.length) {
                arr[k] = left[i]
                i++, k++
            }

            while (j < right.length) {
                arr[k] = right[j]
                j++, k++
            }
        }
        return arr
    }

    solve(lists) {
        const newList = []
        lists.forEach(list => {
            newList.push(...list)
        })
        return this.mergeSort(newList)
    }
}