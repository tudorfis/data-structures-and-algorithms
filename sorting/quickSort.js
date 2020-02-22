
class QuickSort {
    static sort(arr = [], start, end) {
        if (start === undefined) start = 0
        if (end === undefined) end = arr.length - 1

        if (start >= end) return

        const boundary = QuickSort.partition(arr, start, end)
        QuickSort.sort(arr, start, boundary - 1)
        QuickSort.sort(arr, boundary + 1, end)

        return arr
    }
    static swap(i1, i2, arr) {
        const tmp = arr[i1]
        arr[i1] = arr[i2]
        arr[i2] = tmp
    }
    static partition(arr, start, end) {
        const pivot = arr[end]
        let boundary = start-1

        for (let i = start; i <= end; i++)
            if (arr[i] <= pivot) {
                boundary++
                QuickSort.swap(i, boundary, arr)
                
            }
        
        return boundary
    }
}

module.exports = QuickSort