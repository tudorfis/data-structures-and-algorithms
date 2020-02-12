
class Trie {
    static Node = class Node {
        constructor(value) {
            this.value = value
            this.children = new Array(26).fill(null)
            this.isEndOfWord = false
        }
        toString = _=> `value=${this.value}`
    }
    constructor() {
        this.root = new Trie.Node(' ')
    }
    print = _=> console.log(`${JSON.stringify(this, null, 4)}`)
    insert(word) {
        let current = this.root

        for (const ch of word) { 
            const index = ch.charCodeAt(0) - 97

            if (current.children[index] === null)
                current.children[index] = new Trie.Node(ch)

            current = current.children[index]
        }
        
        current.isEndOfWord = true
    }
}

const trie = new Trie()
trie.insert('boy')
trie.insert('book')
trie.insert('border')
// trie.insert('cat')
// trie.insert('dog')
// trie.insert('doctor')
// trie.insert('fine')

trie.print()
