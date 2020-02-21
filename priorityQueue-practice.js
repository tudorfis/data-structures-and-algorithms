
const PriorityQueue = require('./priorityQueue.js')
const queue = new PriorityQueue(5);

queue.add(10);
queue.add(40);
queue.add(20);
queue.add(50);
queue.add(30);
// queue.remove();

console.log(`${JSON.stringify(queue)}`);

queue.reverse(3);

console.log(`${JSON.stringify(queue)}`);

// queue.add(9);

// console.log(`${JSON.stringify(queue)}`);

// console.log(`${JSON.stringify(queue)}`);

// console.log(queue.remove());
// console.log(queue.remove());
// console.log(queue.remove());
// console.log(queue.remove());

// queue.add(60);
// queue.add(70);

// console.log(`${JSON.stringify(queue)}`);

// console.log(queue.remove());

// console.log(`${JSON.stringify(queue)}`);

// queue.add(80);
// queue.add(90);
// queue.add(100);

// console.log(`${JSON.stringify(queue)}`);

// queue.reverse(3);

// console.log(`${JSON.stringify(queue)}`);

// console.log(queue.remove());
// console.log(queue.remove());

// console.log(`${JSON.stringify(queue)}`);

// console.log(queue.remove());
// console.log(queue.remove());
// console.log(queue.remove());
// console.log(queue.remove());
// console.log(queue.remove());
// console.log(queue.remove());