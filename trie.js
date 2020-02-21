
const _children = new WeakMap()

class Node {
    static ALPHABET_SIZE = 26
    isEndOfWord = false
    
    constructor(value) {
        this.value = value
        _children.set(this, {})
    }
    toString = _=> `value=${this.value}`
    addChild = (key, value) => {
        const children = this.getChildren()
        children[key] = value

        _children.set(this, children)
    }
    removeChild = (key) => {
        const children = this.getChildren()
        delete children[key]

        _children.set(this, children)
    }
    getChild = (key) => _children.get(this)[key]
    getChildren = _=> _children.get(this)
    hasChildren = _=> Object.keys(this.getChildren()).length
}

class Trie {
    constructor() {
        this.root = new Node(' ')
        this.items = []
    }
    insert(word) {
        this.items.push(word)

        let current = this.root
        
        for (const ch of word) { 
            if (!current.getChild(ch))
                current.addChild(ch, new Node(ch))
            
            current = current.getChild(ch)
        }
        
        current.isEndOfWord = true
    }
    contains(word) {
        if (!word) return false
        let current = this.root

        for (const ch of word)  {
            if (!current.hasChild(ch)) return false

            current = current.getChild(ch)
        }

        return current.isEndOfWord
    }
    traverse(node = this.root) {
        // Pre-order: visit the root first
        console.log(node.value, node.isEndOfWord)
        
        for (const key in node.getChildren())
            this.traverse(node.getChildren()[key])
        
        // Post-order: visit the child first
        // console.log(node.value, node.isEndOfWord)
    }
    findLastNodeOf(prefix = '') {
        let current = this.root

        for (const ch of prefix) {
            current = current.getChild(ch)

            if (!current) return null
        }

        return current
    }
    autocomplete(search = '') {
        if (!search.length) return words

        const _autocomplete = (node, prefix) => {
            if (node.isEndOfWord)
                words.push(prefix)

            for (const key in node.getChildren()) {
                const child = node.getChild(key)
                _autocomplete(child, prefix + child.value)
            }
        }

        const words = []
        _autocomplete(this.findLastNodeOf(search), search)

        return words
    }
    autocompleteSlow(search = '') {
        const words = []
        for (const word of this.items)
            if (new RegExp(`^${search}`, 'g').test(word))
                words.push(word)

        return words
    }
    getWords(node = this.root) {
        const words = []
        let word = ''

        const _getWords = (node) => {
            if (!node.hasChildren()) word = ''
    
            for (const key in node.getChildren()) {
            
                const child = node.getChild(key)
                word += child.value
    
                if (child.isEndOfWord) 
                    words.push(word)
                
                _getWords(child)
            }
        }
        _getWords(node)

        return words
    }
    remove(word) {
        if (!word || typeof word !== 'string') return

        let current = this.root
        const lastChild = word.charAt(word.length - 1)

        for (const ch of word) { 
            const child = current.getChild(ch)

            if (!child) break

            if (child.value === lastChild && child.isEndOfWord)
                child.hasChildren() ? child.isEndOfWord = false : current.removeChild(ch)

            current = child
        }
    }
}

module.exports = Trie
