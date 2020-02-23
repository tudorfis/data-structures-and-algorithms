
class Search {
    static linearSearch(arr = [], target = '') {
        for (let i = 0; i < arr.length; i++)
            if (arr[i] === target) return i

        return -1
    }

    static binarySearchIte(arr = [], target = null, left = 0, right = arr.length) {
        if (!target) return

        let middle

        while (left < right) {
            middle = Math.floor((left + right) / 2)

            if (arr[middle] === target) break

            (target < arr[middle]) ?
                right = middle - 1 : left = middle + 1
        }

        return (left < right) ? middle : -1
    }

    static binarySearchRec(arr = [], target = null) {
        if (!target) return

        const _binarySearchRec = (left, right) => {
            if (left >= right) return -1

            let middle = Math.floor((left + right) / 2)
            if (arr[middle] === target) return middle

            return _binarySearchRec(...(target < arr[middle] ?
                [left, middle - 1] : [middle + 1, right]))

        }

        return _binarySearchRec(0, arr.length - 1)
    }

    static ternarySearch(arr = [], target = null, left = 0, right = arr.length - 1) {
        if (left > right) return -1

        const partitionSize = Math.floor((right - left) / 3)
        const mid1 = left + partitionSize
        const mid2 = right - partitionSize

        if (target === arr[mid1])
            return mid1

        if (target === arr[mid2])
            return mid2

        let pos = [left, mid1 - 1]

        if (target > arr[mid1])
            pos = [mid1 + 1, mid2 - 1]

        if (target > arr[mid2])
            pos = [mid2 + 1, right]

        return Search.ternarySearch(arr, target, ...pos)

    }

    static bilutzuSearch(arr = [], target = null, logN = 5) {
        const _bilutzuSearch = (left = 0, right = arr.length - 1) => {
            if (left >= right) return -1

            const partitionSize = Math.floor((right - left) / (logN + 1))
            let mid1, mid2

            for (let i = 0; i < logN; i++) {
                mid1 = left + partitionSize * i
                mid2 = left + partitionSize * (i + 1)
                
                if (target === arr[mid1]) return mid1
                if (target === arr[mid2]) return mid2

                if (target > arr[mid1 + 1] && target < arr[mid2 - 1]) break
            }

            return _bilutzuSearch(mid1 + 1, mid2 - 1)
        }

        return _bilutzuSearch()
    }

    static jumpSearch(arr = [], target = null) {
        if (!target) return
        
        const blockSize = Math.floor(Math.sqrt(arr.length))
        let start = 0, next = blockSize

        while (target > arr[next - 1]) {
            start = next
            next += blockSize
            next = next > arr.length ? arr.length : next
        }

        for (let i = start; i < next; i++)
            if (arr[i] === target) return i

        return -1
    }

    static exponentialSearch(arr = [], target = null) {
        if (!target) return

        let bound = 1
        while (bound < arr.length && target > arr[bound])
            bound *= 2

        const left = bound / 2
        const right = Math.min(bound, arr.length - 1) + 2

        return Search.binarySearchIte(arr, target, left, right)
    }
}

module.exports = Search

