import { BiluArray } from "./array/BiluArray";

const biluArray = new BiluArray<number>(3);
biluArray.insert(10);
biluArray.insert(20);
biluArray.insert(30);
biluArray.insert(40);
console.log(biluArray.indexOf(10));
biluArray.print();

// biluArray.insert('a');
// biluArray.insert('b');
// biluArray.insert('c');
// biluArray.removeAt(0);
// console.log(biluArray.getByIndex(2));
// console.log(biluArray.indexOf('d'));