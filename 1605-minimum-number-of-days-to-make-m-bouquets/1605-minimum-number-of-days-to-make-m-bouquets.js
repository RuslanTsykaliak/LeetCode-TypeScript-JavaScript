/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    // If the total number of flowers needed for all bouquets is more than the total number of flowers available, return -1
    if (m * k > bloomDay.length) return -1;

    // Initialize the left and right boundaries for binary search to the minimum and maximum bloom days
    let [left, right] = [Math.min(...bloomDay), Math.max(...bloomDay)];

    // Perform binary search
    while (left < right) {
        // Calculate the middle value between left and right
        const mid = Math.floor((left + right) / 2);

        // Initialize the count of bouquets and flowers
        let [bouquets, flowers] = [0, 0];

        // Iterate over each flower's bloom day
        for (let day of bloomDay) {
            // If the flower's bloom day is less than or equal to the middle value, increment the count of flowers
            if (day <= mid) {
                flowers++;
                // If the count of flowers reaches k, increment the count of bouquets and reset the count of flowers
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                // If the flower's bloom day is more than the middle value, reset the count of flowers
                flowers = 0;
            }
        }

        // If the count of bouquets is greater than or equal to m, update the right boundary to the middle value
        if (bouquets >= m) {
            right = mid;
        } else {
            // If the count of bouquets is less than m, update the left boundary to the middle value plus one
            left = mid + 1;
        }
    }

    // Return the left boundary as the minimum number of days to wait to be able to make m bouquets
    return left;
};