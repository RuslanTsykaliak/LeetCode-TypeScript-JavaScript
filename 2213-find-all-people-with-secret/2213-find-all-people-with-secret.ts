// Function to find all people who have met the first person directly or indirectly
function findAllPeople(numPeople: number, meetings: number[][], firstPerson: number): number[] {
    // Initialize the group of the first person
    const firstGroup = 0;

    // Function to find the leader of a group
    const findGroupLeader = (groups, index) => {
        // Traverse the group array until the leader is found
        while (index !== groups[index]) {
            index = groups[index];
        }
        return index;
    };

    // Initialize groups array where each person is a group leader of their own group
    let groups = new Array(numPeople).fill(0).map((_, i) => i);
    // Initialize result array to store the people who have met the first person
    let result = [];

    // Assign the first person to the first group
    groups[firstPerson] = firstGroup;

    // Sort the meetings array based on the meeting time
    meetings.sort((a, b) => a[2] - b[2]);

    let i = 0;
    // Iterate over the meetings array
    while (i < meetings.length) {
        // Get the current meeting time
        let currentTime = meetings[i][2];
        // Initialize a temporary array to store the people who have met at the current time
        let temp = [];
        // Process all meetings that occur at the current time
        while (i < meetings.length && meetings[i][2] === currentTime) {
            // Find the group leaders of the two people who have met
            let group1 = findGroupLeader(groups, meetings[i][0]);
            let group2 = findGroupLeader(groups, meetings[i][1]);
            // Merge the two groups
            groups[Math.max(group1, group2)] = Math.min(group1, group2);
            // Add the two people to the temporary array
            temp.push(meetings[i][0]);
            temp.push(meetings[i][1]);
            ++i;
        }
        // For each person in the temporary array, if they are not in the first group, assign them to their own group
        for (let j = 0; j < temp.length; ++j) {
            if (findGroupLeader(groups, temp[j]) !== firstGroup) {
                groups[temp[j]] = temp[j];
            }
        }
    }

    // For each person, if they are in the first group, add them to the result array
    for (let j = 0; j < numPeople; ++j) {
        if (findGroupLeader(groups, j) === firstGroup) {
            result.push(j);
        }
    }

    // Return the result array
    return result;
};
