class Solution {
    solve(nums) {
        if (nums.length <= 2) {
            return 0
        }
        let counter = 0
        let i = 0, j = 1, k = 2
        while (k < nums.length) {
            if (nums[j] === nums[i] || nums[j] === nums[k]) {
                i++, j++, k++
                continue
            }
            const slice = nums.slice(i, k + 1)
            if (nums[j] === Math.max(...slice)) {
                counter++
            }
            if (nums[j] === Math.min(...slice)) {
                counter++
            }
            i++, j++, k++
        }
        return counter
    }
}