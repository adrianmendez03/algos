// You are given a list of integers tasks and another list of integers people. 
// The integer tasks[i] represents the amount of strength required to perform the 
// ith task. people[i] represents the amount of strength the ith person has.
// Return the number of tasks that can be finished if one person can perform at 
// most one task.

class Solution {
    solve(tasks, people) {
        tasks = tasks.sort((a, b) => a - b)
        people = people.sort((a, b) => a - b)
        let i = tasks.length - 1, j = people.length - 1, count = 0
        while (i >= 0 && j >= 0) {
            while (tasks[i] > people[j]) {
                i--
            }
            j--, i--, count++
        }
        return count
    }
}