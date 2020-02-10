"use strict"
exports.__esModule = true
const linkedList = require('./linkedList')
const HashTable = /** @class */ (function () {
    const Entry = /** @class */ (function () {
        function Entry(key, value) {
            this.key = key
            this.value = value
        }
        return Entry
    }())
    function HashTable(length) {
        this.length = length
        this.entries = new Array(length).fill(null)
    }
    HashTable.prototype.hash = function(key) {
        if (typeof key === 'number') return (Math.abs(key) % this.length)
        
        let hash = 0
        for (const ch of key) hash += ch.charCodeAt(0)

        return (hash % this.length)
    }
    HashTable.prototype.put = function(key, value) {
        const entry = new Entry(key, value)
        const index = this.hash(key)
        
        if (this.entries[index] === null)
            this.entries[index] = new linkedList.LinkedList()

        const entriesList = this.entries[index]
        
        if (entriesList.isEmpty()) {
            entriesList.addLast(entry)
            return
        }

        let current = entriesList._first
        while(current !== null) {
            if (current.value.key === key) {
                current.value = entry
                break
            }
            current = current.next
        }
        if (current === null) 
            entriesList.addLast(entry)
    }
    HashTable.prototype.get = function(key) {
        return this._getEntry(key, (current) => current.value.value)
    }
    HashTable.prototype.remove = function(key) {
        this._getEntry(key, (current, entriesList, index, ref) => {
            if (current === entriesList._first) entriesList.removeFirst()
                else if (current === entriesList._last) entriesList.removeLast()
                    else current = current.next

            if (ref.entries[index].isEmpty())
                ref.entries[index] = null
        })
    }
    HashTable.prototype._getEntry = function(key, hook) {
        const index = this.hash(key)
        
        if (this.entries[index] === null)
            throw Error('IllegalStateException')
        
        const entriesList = this.entries[index]
        let current = entriesList._first
        while(current !== null) {
            if (current.value.key === key) {
                return hook(current, entriesList, index, this)
            }
            current = current.next
        }
    }
    
    return HashTable
}())
exports.HashTable = HashTable

const hashTable = new HashTable(10)


hashTable.put('124345-AB', 10)
hashTable.put('124344-AB', 20)
hashTable.put('124335-AB', 30)
hashTable.put('9463245-B', 40)
hashTable.put('124345-AB', 50)
hashTable.put('124345-CJ', 60)
hashTable.put('124555-AB', 70)
hashTable.put('122245-AB', 80)
hashTable.put('111145-AB', 90)

hashTable.put(111145, 100)
hashTable.put(111145, 110)
hashTable.put('124344-AB', 99)

console.log(hashTable.get('124344-AB'))

console.log(`${JSON.stringify(hashTable, null, 4)}`)

console.log(hashTable.get('124345-CJ'))
console.log(hashTable.get('124345-AB'))
console.log(hashTable.get('124335-AB'))
// console.log(hashTable.get(1))

console.log(`${JSON.stringify(hashTable, null, 4)}`)

hashTable.remove('124345-AB')
hashTable.remove('124344-AB')
hashTable.remove('124335-AB')
hashTable.remove('9463245-B')
hashTable.remove('124345-AB')
hashTable.remove('124345-CJ')
hashTable.remove('124555-AB')
hashTable.remove('122245-AB')
hashTable.remove('111145-AB')
hashTable.remove(111145)

console.log(`${JSON.stringify(hashTable, null, 4)}`)
