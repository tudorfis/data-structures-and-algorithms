
class BubbleSort {
    static swap(arr, index1, index2) {
        if (arr[index1] !== arr[index2]) {
            const tmp = arr[index1]
            arr[index1] = arr[index2]
            arr[index2] = tmp
        }
    }
    static sort(arr = []) {
        let isSorted
        for (let i = 0; i < arr.length; i++)  {
            isSorted = true

            for (let j = 1; j < arr.length - i; j++) {
                if (arr[j] > arr[j+1]) {
                    BubbleSort.swap(arr, j, j+1)
                    isSorted = false
                }
            }

            if (isSorted) break
        }

        return arr
    }
}

module.exports = BubbleSort

