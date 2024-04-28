function leastInterval(tasks: string[], n: number): number {
    const taskCount: number[] = new Array(26).fill(0) // Initialize an array to keep count of each
    let maxCount: number = 0 // Variable to keep track of the maximum count of a single task

    // Count the tasks and find out the task with the maximum count
    tasks.forEach(task => {
        const index = task.charCodeAt(0) - 'A'.charCodeAt(0) // Convert char to an incex between 0 and 25
        taskCount[index]++ // Increment the count for this task
        maxCount = Math.max(maxCount, taskCount[index]) // Update maxCount if current task's count is greater
    })

    // Count how many tasks have the same count as maxCount
    let tasksWithMaxCount: number = 0
    taskCount.forEach(count => {
        if (count === maxCount) {
            tasksWithMaxCount++
        }
    })

    // Calculate the least interval
    // First part: Calculate the minimum slots required based on the most frequent task (maxCount -1) times (coolingPeriod + 1)
    // Second part: Add the number of tasks that have the hifhest frequency (tasksWithMaxCount)
    const minSlotsRequired: number = (maxCount - 1) * (n + 1) + tasksWithMaxCount

    // The result is the maximum between the actual size of the tasks and the minimum slots required
    return Math.max(tasks.length, minSlotsRequired)

};