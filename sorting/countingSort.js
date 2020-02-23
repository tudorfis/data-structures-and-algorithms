
class CountingSort {
    static sort(arr = []) {
        const counts = []
        for (const el of arr) {
            if (!counts[el]) counts[el] = 0
            counts[el]++
        }

        let k = 0
        for (const count in counts)
            if (count)
                for (let i = 0; i < counts[count]; i++)
                    arr[k++] = count

        return arr
    }
}

module.exports = CountingSort