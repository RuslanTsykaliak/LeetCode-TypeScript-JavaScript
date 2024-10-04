function dividePlayers(skill: number[]): number {
    skill.sort((a, b) => a - b);

    let start = 0,
        end = skill.length - 1,
        res = 0;

    const target = skill[start] + skill[end]

    while (start < end) {
        if ((skill[start] + skill[end]) !== target) return -1

        res += skill[start] * skill[end]
        start++
        end--
    }

    return res
};