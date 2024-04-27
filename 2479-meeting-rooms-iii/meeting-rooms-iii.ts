function mostBooked(n: number, meetings: number[][]): number {
    meetings.sort((a, b) => a[0] - b[0]); // Sorting the meetings by their start time

    let lastAvailable: number[] = new Array(n).fill(0); // When each room will be available
    let roomUsedCount: number[] = new Array(n).fill(0); // Count of how many times each room is used

    for (const [start, end] of meetings) {
        let found = false;
        let earlyEndRoom = 0;
        let earlyEndTime = Infinity;

        for (let room = 0; room < n; room++) {
            if (lastAvailable[room] <= start) {
                // If the room is available for the current meeting
                lastAvailable[room] = end; // Update the room's next available time
                roomUsedCount[room]++; // Increment the usage count
                found = true; // Mark as found so we don't use the early end logic
                break; // Exit the loop as we've found a room
            }

            // Keep track of the earliest available room in case none are available at the start time
            if (lastAvailable[room] < earlyEndTime) {
                earlyEndTime = lastAvailable[room];
                earlyEndRoom = room;
            }
        }

        if (!found) {
            // If no room is available at the meeting's start time, use the earliest ending room
            lastAvailable[earlyEndRoom] = earlyEndTime + (end - start); // Update its next available time
            roomUsedCount[earlyEndRoom]++; // Increment the usage count
        }
    }

    // Determine the room that was used the most
    let resultRoom = 0;
    for (let room = 1; room < n; room++) {
        if (roomUsedCount[room] > roomUsedCount[resultRoom]) {
            resultRoom = room;
        }
    }

    return resultRoom;
}