function maxDistance(position: number[], m: number): number {
    position.sort((a, b) => a - b);
    let left = 1, right = position[position.length - 1] - position[0];
    let maxMinForce = - 1;

    const isForceSufficient = (force: number) => {
        let lastPlacedPosition = position[0], placedBalls = 1;
        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPlacedPosition >= force) {
                lastPlacedPosition = position[i];
                placedBalls++;
            }
        }
        return placedBalls >= m;
    }

    while (left <= right) {
        let midForce = left + Math.floor((right - left) / 2);
        if (isForceSufficient(midForce)) {
            maxMinForce = midForce;
            left = midForce + 1;
        } else right = midForce - 1;
    }

    return maxMinForce;
};