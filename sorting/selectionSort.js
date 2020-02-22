
class SelectionSort {
    static swap(arr, index1, index2) {
        if (index1 !== index2 && arr[index1] !== arr[index2]) {
            const tmp = arr[index1]
            arr[index1] = arr[index2]
            arr[index2] = tmp
        }
    }
    static findMinIndex(arr, i) {
        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) 
            if (arr[j] < arr[minIndex]) minIndex = j
        
        return minIndex
    }
    static sort(arr = []) {
        for (let i = 0; i < arr.length; i++) 
            SelectionSort.swap(arr, i, 
                SelectionSort.findMinIndex(arr, i))

        return arr
    }
}

module.exports = SelectionSort

