function smallestChair(times: number[][], targetFriend: number): number {
    // create a list of friend objects sorted by arrival
    const sortedFriends = times.map((interval, index) => (
        {
            arrival: interval[0],
            leave: interval[1],
            index // preserve the original index that identifies the friend
        })).sort((a, b) => a.arrival - b.arrival);

    // create an array to represent the occupancy of chairs
    // chairs[i] = the time when this chair will be unoccupied
    const chairs = new Array(times.length * 10).fill(-1);

    for (const friend of sortedFriends) {
        let chair = 0;

        // look for the lowest i such that chair[i] can be sat on
        for (let i = 0; i < chairs.length; i++) {
            if (friend.arrival >= chairs[i]) {
                chair = i;
                break;
            }
        }

        chairs[chair] = friend.leave;

        // stop if and only if we matched a seat for targetFriend
        if (friend.index === targetFriend) {
            return chair;
        }
    }

    return -1;
};