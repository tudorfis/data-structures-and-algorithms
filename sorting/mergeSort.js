

class MergeSort {
    static merge(left, right, arr) {
        let i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) 
            arr[k++] = (left[i] <= right[j]) ? left[i++] : right[j++]

        if (i < left.length)
            arr[k++] = left[i++]

        while (j < right.length)
            arr[k++] = right[j++]

        return arr
    }
    static sort(arr = []) {
        if (arr.length < 2) return

        let middle = Math.floor(arr.length / 2)
        let left = arr.slice(0, middle)
        let right = arr.slice(middle)

        MergeSort.sort(left)
        MergeSort.sort(right)
        
        return MergeSort.merge(left, right, arr)
    }
}

module.exports = MergeSort

/**
 *  MergeSort.sort([8,2,4,1,3]
 * 
    sort [82413]
        sort[82]
            sort[8]
            sort[2]
            merge([8], [2], [82])
                [28]
        sort[413]
            sort[4]
            sort[13]
                sort[1]
                sort[3]
                merge([1], [3], [13])
                    [13]
            merge([4], [13], [413])
                [134]
        merge([28], [134], [82413])
            [12348]
*/

