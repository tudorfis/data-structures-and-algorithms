
const StringManipulation = require('./StringManipulation')
console.log(`========== ${(start = new Date()) && 'START STRING MANIPULATION'} ===============`)

// console.log(`Number of vowels: `, StringManipulation.countVowels('hello'))
// console.log(`Reverse string: `, StringManipulation.reverse('hello world'))
// console.log(`Reverse words: `, StringManipulation.reverseWords('trees are beautiful'))
console.log(`Is rotation: `, StringManipulation.isRotation('ABCD', 'CDBA'))
// console.log(`Are rotations: `, StringManipulation.areRotations('ABCD', 'CDBA'))
// console.log(`Remove duplicate characters: `, StringManipulation.removeDuplicates('Hellooo!!'))
// console.log(`Find most repeated: `, StringManipulation.mostRepeated('trees are beautiful'))

console.log(`${(new Date() - start) / 1000} seconds`)