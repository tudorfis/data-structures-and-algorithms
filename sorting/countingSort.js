
class CountingSort {
    static sort(arr = []) {
        const countMap = new Map()
        for (const el of arr) {
            if (!countMap.has(el)) {
                countMap.set(el, 1)
                continue
            }

            countMap.set(countMap.get(el) + 1)
        }

        console.log(arr)
        console.log(countMap)
    }
}

module.exports = CountingSort