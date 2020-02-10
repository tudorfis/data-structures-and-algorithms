
const CharFinder = (function(){
    function CharFinder() {
        this.mainMap = new Map()
        this.keyLength = 100
    }
    CharFinder.prototype.buildCountMap = function(str) {
        const map = new Map()
        for (const ch of str) {
            const count = (map.has(ch) ? map.get(ch) : 0) + 1
            map.set(ch, count)
        }
        return map
    }
    // O(n * log(n))
    CharFinder.prototype.findFirstNonRepeatingChar = function(str) {
        const map = this.buildCountMap(str)
        for (const ch of str) {
            if (map.get(ch) === 1) return ch
        }
        return ''
    }
    // O(n)
    CharFinder.prototype.findFirstRepeatingChar = function(str) {
        const set = new Set()
        for (const ch of str) {
            if (set.has(ch)) return ch
            set.add(ch)
        }
        return ''
    }
    CharFinder.prototype.hash = function(key) {
        if (typeof key === 'number') return key % this.keyLength

        let hash = 0
        for (const ch of key) hash += ch.charCodeAt(0)
        return (hash % this.keyLength)
    }
    return CharFinder
}())

const charFiner = new CharFinder()
const ch1 = charFiner.findFirstNonRepeatingChar('a green apple')
const ch2 = charFiner.findFirstRepeatingChar('green apple')
const key1 = charFiner.hash('123443-AB')
const key2 = charFiner.hash(123443)

console.log('first non-repeated character: ', ch1)
console.log('first repeated character: ', ch2)
console.log('result of key1 string hash: ', key1)
console.log('result of key2 number hash: ', key2)

