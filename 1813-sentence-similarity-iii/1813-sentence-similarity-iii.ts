function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    const shorter = (sentence1.length > sentence2.length ? sentence2 : sentence1).split(" ")
    const longer = (sentence1.length > sentence2.length ? sentence1 : sentence2).split(" ")

    while (shorter.length) {
        if (shorter[0] === longer[0]) {
            shorter.shift()
            longer.shift()
        } else if (shorter[shorter.length - 1] === longer[longer.length - 1]) {
            shorter.pop()
            longer.pop()
        } else {
            return false
        }
    }

    return true
};