
const CharFinder = (function () {
    function CharFinder() {
        this.mainMap = new Map()
        this.keyLength = 100
    }
    CharFinder.prototype.buildCountMap = function (str) {
        const map = new Map()
        for (const ch of str) {
            const count = (map.has(ch) ? map.get(ch) : 0) + 1
            map.set(ch, count)
        }
        return map
    }
    // O(n * log(n))
    CharFinder.prototype.findFirstNonRepeatingChar = function (str) {
        const map = this.buildCountMap(str)
        for (const ch of str) {
            if (map.get(ch) === 1) return ch
        }
        return ''
    }
    // O(n)
    CharFinder.prototype.findFirstRepeatingChar = function (str) {
        const set = new Set()
        for (const ch of str) {
            if (set.has(ch)) return ch
            set.add(ch)
        }
        return ''
    }
    CharFinder.prototype.hash = function (key) {
        if (typeof key === 'number') return key % this.keyLength

        let hash = 0
        for (const ch of key) hash += ch.charCodeAt(0)
        return (hash % this.keyLength)
    }
    CharFinder.prototype.mostFrequent = (arr) => {
        if (!arr || !arr.length || typeof arr[0] !== 'number')
            throw Error('IllegalArgumentException')

        const map = new Map()
        for (const num of arr)
            map.set(num, ((map.has(num) ? map.get(num) : 0) + 1))

        let max = 0
        for (const num of arr)
            max = (map.get(num) > max) ? num : max

        return max
    }
    CharFinder.prototype.countPairsWithDiff = (arr, difference) => {
        const set = new Set();
        for (const num of arr) set.add(num)

        let count = 0
        for (const num of arr) {
            if (set.has(num + difference)) count++
            if (set.has(num - difference)) count++
            set.delete(num)
        }
        return count
    }
    CharFinder.prototype.twoSum = (arr, target) => {
        const set = new Set();
        for (const numI in arr) {
            const complement = target - arr[numI]
            const num = arr[numI]
            if (set.has(complement)) {
                return new Object({ num, numI })
            }
            set.add(num)
        }
        return null
    }
    return CharFinder
}())

const charFinder = new CharFinder()
const ch1 = charFinder.findFirstNonRepeatingChar('a green apple')
const ch2 = charFinder.findFirstRepeatingChar('green apple')
const key1 = charFinder.hash('123443-AB')
const key2 = charFinder.hash(123443)
const max1 = charFinder.mostFrequent([1, 2, 2, 3, 2, 3, 3, 4, 2])
const countPairs1 = charFinder.countPairsWithDiff([1, 7, 5, 9, 2, 12, 3], 3)
const twoSum1 = charFinder.twoSum([2, 7, 11, 15, 20, 29], 9)

// [1, 7, 5, 9, 2, 12, 3]
// [3, 9, 7, 11, 4, 14, 5]

console.log('first non-repeated character: ', ch1)
console.log('first repeated character: ', ch2)
console.log('result of key1 string hash: ', key1)
console.log('result of key2 number hash: ', key2)
console.log('result of max1 most frequent: ', max1)
console.log('result of countPairs1 total: ', countPairs1)
console.log('result of twoSum1 total: ', twoSum1)

