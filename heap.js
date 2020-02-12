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
    bubbleDown(arr) {
        arr = arr || this.items
        let index = 0
        let doContinue
        let largerIndex

        do {
            doContinue = (largerIndex = this.largerChildIndex(index)) !== -1

            if (doContinue &= (arr[index] < arr[largerIndex])) {
                this._swap(index, largerIndex)
                index = largerIndex
            }

        } while (doContinue)
    }
    largerChildIndex(index, arr) {
        arr = arr || this.items
        const leftIndex = this._leftChild(index)
        const rightIndex = this._rightChild(index)
        
        const leftChild = arr[leftIndex]
        const rightChild = arr[rightIndex]

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
    _lastParent(arr) {
        arr = arr || this.items
        return Math.round((arr.length / 2) -1)
    }
    _swap(index1, index2, arr) {
        arr = arr || this.items
        const temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
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
    heapify(arr) {
        if (!arr || arr.length <= 1) throw Error('IllegalStateException')
        
        const lastParentIndex = Math.round(arr.length / 2 - 1)
        for (let i = lastParentIndex; i >= 0; i--)
            this._heapify(arr, i)
        
        return arr
    }
    _heapify(arr, index) {
        let largerIndex = index

        const leftIndex = index * 2 + 1
        if (leftIndex < arr.length && arr[leftIndex] > arr[index])
            largerIndex = leftIndex

        const rightIndex = leftIndex + 1
        if (rightIndex < arr.length && arr[rightIndex] > arr[index])
            largerIndex = rightIndex

        if (largerIndex === index) return

        const temp = arr[index]
        arr[index] = arr[largerIndex]
        arr[largerIndex] = temp

        this._heapify(arr, largerIndex)
    }
    getKthLargest(arr, k) {
        if (!arr || arr.length === 0) throw Error('IllegalStateException')
        if (!k || k <= 0 || k > arr.length) throw Error('IllegalArgumentException')

        const heap = new Heap(arr.length)
        for (const num of arr) heap.insert(num)

        let kthLargest = null
        while(k--) kthLargest = heap.remove()

        return kthLargest
    }
    isMaxHeap(isMaxHeap, index) {
        if (this.isEmpty()) throw Error('IllegalStateException')

        if (isMaxHeap === undefined) isMaxHeap = false
        if (index === undefined) index = 0

        const leftIndex = this._leftChild(index)
        if (leftIndex < this.items.length
             && this.items[leftIndex] > this.items[index])
            isMaxHeap = true

        const rightIndex = leftIndex + 1
        if (rightIndex < this.items.length 
             && this.items[rightIndex] > this.items[index])
            isMaxHeap = true

        if (isMaxHeap || index >= this.items.length) return false
    
        this.isMaxHeap(false, index++)

        return true
    }
}

const heap = new Heap(10)

const inArr = [5,3,8,4,1,2]
const arr1 = heap.heapify(inArr)
console.log('heapify()', arr1)

const largestKth = heap.getKthLargest(inArr, 2)
console.log('getKthLargest()', largestKth)

const heap2 = new Heap(12)

heap2.insert(15)
heap2.insert(10)
heap2.insert(3)
heap2.insert(8)
heap2.insert(12)
heap2.insert(9)
heap2.insert(4)
heap2.insert(1)
heap2.insert(24)

const isMaxHeap = heap2.isMaxHeap()
console.log('isMaxHeap()', isMaxHeap)

// const sortAsc = heap.sortAsc([12,530,203,95,45,120,1,2,3,40,50])
// console.log(sortAsc)

// const descAsc = heap.sortDesc([12,530,203,95,45,120,1,2,3,40,50])
// console.log(descAsc)


class PriorityQueueWithHeap {
    constructor(length) {
        this.heap = new Heap(length)
    }
    enqueue(item) {
        this.heap.insert(item)
    }
    dequeue() {
        return this.heap.remove()
    }
    isEmpty() {
        return this.heap.isEmpty()
    }
    print() {
        return this.heap.print()
    }
}

// const pq = new PriorityQueueWithHeap(5)
// pq.enqueue(30)
// pq.enqueue(20)
// pq.enqueue(10)
// pq.print()

// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())

