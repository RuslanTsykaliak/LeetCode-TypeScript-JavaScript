function passThePillow(n: number, time: number): number {
    if (n > time) return time + 1;

    const cycles = Math.floor(time / (n - 1));
    const timeLeft = time % (n - 1);

    if (cycles % 2 === 0) {
        return 1 + timeLeft;
    } else {
        return n - timeLeft;
    }
};