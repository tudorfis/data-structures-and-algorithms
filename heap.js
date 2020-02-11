class Heap {
    constructor(capacity) {
        this.items = new Array(capacity).fill(null)
        this.size = 0
    }
    print() {
        console.log(`${JSON.stringify(this, null, 4)}`)
    }
    isFull() {
        return (this.size === this.items.length)
    }
    isEmpty() {
        return (this.size === 0)
    }
    insert(value) {
        if (this.isFull()) throw Error('IllegalStateException')

        this.items[this.size++] = value
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.size - 1
        do {
            let parentIndex = this._parent(index)
            if (this.items[index] > this.items[parentIndex]) 
                this._swap(index, parentIndex)
            
            index = parentIndex
        } while (index > 0)
    }
    remove() {
        if (this.isEmpty()) throw Error('IllegalStateException')

        const removedItem = this.items[0]
        this.items[0] = this.items[--this.size]
        this.items[this.size] = null

        this.bubbleDown()
        return removedItem
    }
    bubbleDown() {
        let index = 0
        let doContinue
        let largerIndex

        do {
            doContinue = (largerIndex = this.largerChildIndex(index)) !== -1

            if (doContinue &= (this.items[index] < this.items[largerIndex])) {
                this._swap(index, largerIndex)
                index = largerIndex
            }

        } while (doContinue)
    }
    largerChildIndex(index) {
        const leftIndex = this._leftChild(index)
        const rightIndex = this._rightChild(index)
        
        const leftChild = this.items[leftIndex]
        const rightChild = this.items[rightIndex]

        if (leftChild && rightChild) 
            return ((leftChild > rightChild) ? leftIndex : rightIndex)

        else if (leftChild && !rightChild) return leftIndex

        else if (!leftChild) return -1
    }
    _leftChild(index) {
        return ((index * 2) + 1)
    }
    _rightChild(index) {
        return ((index * 2) + 2)
    }
    _parent(index) {
        return Math.floor((index - 1) / 2)
    }
    _swap(index1, index2) {
        const temp = this.items[index1]
        this.items[index1] = this.items[index2]
        this.items[index2] = temp
    }
    sortDesc(arr) {
        if (!arr || arr.length <= 1) throw Error('IllegalArgumentException')

        const tempHeap = new Heap(arr.length)

        for (const num of arr)
            tempHeap.insert(num)
        
        const newArr = []
        while(!tempHeap.isEmpty()) 
            newArr.push(tempHeap.remove())

        return newArr
    }
    sortAsc(arr) {
        if (!arr || arr.length <= 1) throw Error('IllegalArgumentException')

        const tempHeap = new Heap(arr.length)

        for (const num of arr)
            tempHeap.insert(num)

        const newArr = []
        for (let i = tempHeap.size - 1; i >= 0; i--)
            newArr[i] = tempHeap.remove()

        return newArr
    }
}
const heap = new Heap(12)

heap.insert(15)
heap.insert(10)
heap.insert(3)
heap.insert(8)
heap.insert(12)
heap.insert(9)
heap.insert(4)
heap.insert(1)
heap.insert(24)

const sortAsc = heap.sortAsc([12,530,203,95,45,120,1,2,3,40,50])
console.log(sortAsc)

const descAsc = heap.sortDesc([12,530,203,95,45,120,1,2,3,40,50])
console.log(descAsc)












