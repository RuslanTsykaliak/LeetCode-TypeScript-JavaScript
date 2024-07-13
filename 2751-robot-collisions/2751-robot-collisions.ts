type Direction = "R" | "L";

type Robot = {
    p: number;
    h: number;
    d: Direction;
    isDead: boolean;
}

function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    let robots = getRobots(positions, healths, directions);
    const sortedRobots = robots.slice().sort((r1, r2) => r1.p - r2.p);
    const rightRobotStack = [];
    for (const l of sortedRobots) {
        if (l.d === "R") {
            rightRobotStack.push(l);
            continue;
        }
        // Left moving robot
        while (rightRobotStack.length > 0 && !l.isDead) {
            const r = rightRobotStack.pop();
            maybeCollide(l, r);
            if (!r.isDead) rightRobotStack.push(r);
        }
    }
    return robots.filter((r) => !r.isDead).map((r) => r.h);
}

function getRobots(positions: number[], healths: number[], directions: string) {
    const robots = [];
    for (let i = 0; i < positions.length; i++) {
        const newRobot = { p: positions[i], h: healths[i], d: directions[i], isDead: false };
        robots.push(newRobot);
    }
    return robots;
}

function maybeCollide(l: Robot, r: Robot): void {
    if (l.h < r.h) {
        l.isDead = true;
        r.h--;
        return;
    }
    if (l.h > r.h) {
        r.isDead = true;
        l.h--;
        return;
    }
    r.isDead = true;
    l.isDead = true;
}
