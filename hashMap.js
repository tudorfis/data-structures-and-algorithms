"use strict"
exports.__esModule = true
const HashMap = /** @class */ (function () {
    const Entry = /** @class */ (function () {
        function Entry(key, value) {
            this.key = key
            this.value = value
        }
        return Entry
    }())
    function HashMap(length) {
        this.entries = new Array(length).fill(null)
        this.count = 0
    }
    HashMap.prototype.put = (key, value) => {
        const entry = this.getEntry(key)
        if (entry !== null) {
            entry.value = value
            return
        }

        if (this.isFull())
            throw Error('IllegalStateException')

        entries[getIndex(key)] = new Entry(key, value)
        count++
    }
    HashMap.prototype.get = (key) => {
        const entry = this.getEntry(key)
        return (entry !== null) ? entry.value : null
    }
    HashMap.prototype.remove = (key) => {
        const index = this.getIndex(key)
        if (index === -1 || this.entries[index] === null)
            return
        
        this.entries[index] = null
        count--
    }
    HashMap.prototype.size = _=> {
        return this.count
    }
    HashMap.prototype.isFull = _=> {
        return (this.count === this.entries.length)
    }
    HashMap.prototype.getEntry = (key) => {
        const index = this.getIndex(key)
        return index >= 0 ? this.entries[index] : null
    }
    HashMap.prototype.getIndex = (key) => {
        let steps = 0
        while (steps < this.entries.length) {
            const index = this.index(key, steps++)
            const entry = this.entries[index]
            if (entry === null || entry.key === key)
                return index
        }
        return -1
    }
    HashMap.prototype.index = (key, i) => {
        return (this.hash(key) + i) % entries.length
    }
    HashMap.prototype.hash = (key) => {
        return key % entries.length
    }
    return HashMap
})()
exports.HashMap = HashMap

const map = new HashMap(10)