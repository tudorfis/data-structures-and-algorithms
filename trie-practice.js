
const words = require('./1m-word-list.js')
const Trie = require('./trie.js')
const trie = new Trie()

console.log(`\n======== ADDING TRIES=========`)
let start = new Date().getTime()

let i = 0
for (const word of words) {
    trie.insert(word)
    if (i === 10**5) break
    i++
}
console.log(`Finished in: ${new Date().getTime() - start} milliseconds\n\n`)

const searchWord = 'a'

console.log('======== AUTOCOMPLETE FAST =========')
start = new Date().getTime()
trie.autocomplete(searchWord)
console.log(`Finished in: ${new Date().getTime() - start} milliseconds\n\n`)

console.log('======== AUTOCOMPLETE SLOW =========')
start = new Date().getTime()
trie.autocompleteSlow(searchWord)
console.log(`Finished in: ${new Date().getTime() - start} milliseconds`)
