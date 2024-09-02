function chalkReplacer(chalk: number[], k: number): number {
    const totalChalkNeeded = chalk.reduce((sum, studentChalkUse) => sum + BigInt(studentChalkUse), 0n);

    let remainingChalk = Number(BigInt(k) % totalChalkNeeded);

    for (let studentIndex = 0; studentIndex < chalk.length; studentIndex++) {
        if (remainingChalk < chalk[studentIndex]) {
            return studentIndex;
        }
        remainingChalk -= chalk[studentIndex];
    }

    return 0;
}
