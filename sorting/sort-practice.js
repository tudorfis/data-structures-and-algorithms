
// BubbleSort.sort([])
// BubbleSort.sort([4])
// BubbleSort.sort([4,1])
// BubbleSort.sort([4,1,6,7,3,9,2,10,23,8,25])
// BubbleSort.sort([7, 3, 1, 4, 6, 2, 3])

// [8, 2, 4, 1, 3]
//  i  j
// console.log(SelectionSort.sort())
// console.log(SelectionSort.sort([]))
// console.log(SelectionSort.sort([8]))
// console.log(SelectionSort.sort([8, 2]))
// console.log(SelectionSort.sort([8, 2, 4, 1, 3]))

// console.log(InsertionSort.sort([7, 4, 5, 2, 1, 8, 3]))

/**
 * Get Random Array With Unique Numbers
 */
let i = 0, n = 10**1
const arr = []
while (true) {
    if (i++ === n) break
    arr.push(Math.ceil(Math.random(i, n) * n))

    // let rnd = null
    // do rnd = Math.ceil(Math.random(i, n) * n)
    // while (arr.includes(rnd))
    // arr.push(rnd)
}

const MergeSort = require('./mergeSort')
const BubbleSort = require('./bubbleSort')
const SelectionSort = require('./selectionSort')
const InsertionSort = require('./insertionSort')
const QuickSort = require('./quickSort')
const CountingSort = require('./countingsort')

const start = new Date().getTime()
console.log(`========== START SORTING ===============`)

// BubbleSort.sort(arr)
// SelectionSort.sort(arr)
// InsertionSort.sort(arr)
// MergeSort.sort(arr)
// console.log(QuickSort.sort(arr))
console.log(CountingSort.sort(arr))

console.log(`${(new Date().getTime() - start) / 1000} seconds`)
