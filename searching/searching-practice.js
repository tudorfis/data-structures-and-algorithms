
const Search = require('./search')

let i = 0, n = 10**6, arr = []
while (i !== n) arr.push(Math.ceil(Math.random(i++, n) * n))
arr = arr.sort((a, b) => a - b);
target = arr[100000]

console.log(`========== ${(start = new Date()) && 'START SEARCHING'} ===============`)
  
console.log(Search.linearSearch(arr, target))
console.log(Search.binarySearchRec(arr, target))
console.log(Search.binarySearchIte(arr, target))
console.log(Search.ternarySearch(arr, target))
console.log(Search.bilutzuSearch(arr, target, 9))
console.log(Search.jumpSearch(arr, target))
console.log(Search.exponentialSearch(arr, target))

console.log(`${(new Date() - start) / 1000} seconds`)

// let start1, start2

// console.log(`========== ${(start1 = new Date()) && 'START BILUTZU SEARCHING'} ===============`)
//     console.log(Search.bilutzuSearch(arr, target, 70000))
// console.log(`${(new Date() - start1) / 1000} seconds`)

// console.log(`========== ${(start2 = new Date()) && 'START TERNARY SEARCHING'} ===============`)
//     console.log(Search.ternarySearch(arr, target))
// console.log(`${(new Date() - start2) / 1000} seconds`)


// console.log(Search.jumpSearch([1,2,3,5,7,8,10,21,29,33,34,49,50,53,55,75,89,90], 89))
// console.log(Search.jumpSearch([1,2], 89))

// console.log(Search.exponentialSearch([1,2,3,5,7,8,10,21,29,33,34,49,50,53,55,75,89,90], 49))
