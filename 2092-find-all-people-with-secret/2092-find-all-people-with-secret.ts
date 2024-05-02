function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {

    // Initialize a parent array to represent connections between people.

    let parentArray: Array<number> = Array.from({ length: n + 1 }, (_, index) => index);

    parentArray[firstPerson] = 0;  // Connect the first person directly to person 0.


    // Helper function to find the ultimate parent of a person.

    function findParent(personIndex: number): number {

        if (parentArray[personIndex] !== personIndex) {

            parentArray[personIndex] = findParent(parentArray[personIndex]);

        }

        return parentArray[personIndex];

    }


    // A map to store lists of meetings by the time they occur.

    let meetingTimesMap = new Map<number, Array<Array<number>>>();

    for (let meeting of meetings) {

        const time = meeting[2];

        let timeMeetings: Array<Array<number>> = meetingTimesMap.get(time) || [];

        timeMeetings.push(meeting);

        meetingTimesMap.set(time, timeMeetings);

    }


    // Sort the times to process meetings in chronological order.

    const sortedTimes = [...meetingTimesMap.keys()].sort((a, b) => a - b);


    for (let time of sortedTimes) {

        // First round to connect all people who meet at this time.

        for (let meeting of meetingTimesMap.get(time)) {

            let [personA, personB] = meeting;

            let parentA = findParent(personA);

            let parentB = findParent(personB);

            if (parentArray[parentA] === 0 || parentArray[parentB] === 0) {

                parentArray[parentA] = 0;

                parentArray[parentB] = 0;

            }

            parentArray[findParent(personA)] = parentArray[findParent(personB)];

        }


        // Second round to reset meeting participant's parent if they shouldn't be connected.

        for (let meeting of meetingTimesMap.get(time)) {

            let [personA, personB] = meeting;

            if (parentArray[findParent(personA)] !== 0 && parentArray[findParent(personB)] !== 0) {

                parentArray[personA] = personA;

                parentArray[personB] = personB;

            }

        }

    }


    // Collect all people who are still connected to person 0.

    let peopleConnectedToZero: Array<number> = [];

    for (let i = 0; i < n; i++) {

        if (parentArray[findParent(i)] === 0) {

            peopleConnectedToZero.push(i);

        }

    }


    // Return the list of people that remain connected to person 0.

    return peopleConnectedToZero;

}