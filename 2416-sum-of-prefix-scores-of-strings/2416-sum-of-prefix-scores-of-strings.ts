function sumPrefixScores(words: string[]): number[] {
    const trie = new Trie()
    const n = words.length

    for (const word of words) {
        trie.insert(word)
    }

    const result = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        result[i] = trie.getPrefixScores(words[i])
    }

    return result
}

class TrieNode {
    children: Map<string, TrieNode>
    count: number

    constructor() {
        this.children = new Map()
        this.count = 0
    }
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let node = this.root
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode())
            }
            node = node.children.get(char)!
            node.count++
        }
    }

    getPrefixScores(word: string): number {
        let node = this.root
        let score = 0
        for (const char of word) {
            if (!node.children.has(char)) {
                break
            }
            node = node.children.get(char)!;
            score += node.count
        }
        return score
    }
}