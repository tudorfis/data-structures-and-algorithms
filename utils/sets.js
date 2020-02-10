
const set = new Set();
const numbers = [1,2,3,3,2,1,4];
for (const number of numbers) set.add(number);
console.log('set: ', set);

set.delete(1);
console.log('set: ', set);