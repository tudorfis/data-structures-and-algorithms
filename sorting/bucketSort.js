
class BucketSort {
    static createBucket(arr, numberOfBuckets) {
        const buckets = []

        for (const el of arr) {
            const pos = el / numberOfBuckets
            buckets[pos] = buckets[pos] || []
            buckets[pos].push(el)
        }

        return buckets
    }
    static sort(arr = [], numberOfBuckets = 1) {
        let k = 0
        for (let bucket of BucketSort.createBucket(arr, numberOfBuckets))
            if (bucket) {
                bucket.sort()
                for (let el of bucket)
                    arr[k++] = el
            }

        return arr
    }
}

module.exports = BucketSort