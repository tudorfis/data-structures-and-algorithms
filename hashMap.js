class HashMap {
    static Entry = class Entry {
        constructor(key, value) {
            this.key = key
            this.value = value
        }
    }
    count = 0
    constructor(length) {
        this.entries = new Array(length).fill(null)
    }
    put(key, value) {
        const entry = this._getEntry(key)
        if (entry !== null) {
            entry.value = value
            return
        }

        if (this.isFull())
            throw Error('IllegalStateException')

        this.entries[this.getIndex(key)] = new HashMap.Entry(key, value)
        this.count++
    }
    get(key) {
        const entry = this._getEntry(key)
        return (entry !== null) ? entry.value : null
    }
    remove(key) {
        const index = this.getIndex(key)
        if (index === -1 || this.entries[index] === null)
            return
        
        this.entries[index] = null
        count--
    }
    size = _=> this.count
    isFull = _=> (this.count === this.entries.length)
    hash = (key) => (typeof key === 'string' ? key.charCodeAt(0) : key) % this.entries.length
    index = (key, i) => (this.hash(key) + i) % this.entries.length
    getIndex(key) {
        let steps = 0
        while (steps < this.entries.length) {
            const index = this.index(key, steps++)
            const entry = this.entries[index]
            if (entry !== undefined && (entry === null || entry.key === key))
                return index
        }
        return -1
    }
    _getEntry(key) {
        const index = this.getIndex(key)
        return index !== -1 ? this.entries[index] : null
    }
    toArray = _=> {
        const entries = this.entries.filter(e => e !== null)
        return entries.length > 0 ? entries : null
    }
}
exports.HashMap = HashMap
