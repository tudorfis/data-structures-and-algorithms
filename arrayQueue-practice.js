
const ArrayQueue = require('./arrayQueue.js')
const queue = new ArrayQueue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();
queue.dequeue();
queue.enqueue(60);

console.log(`${JSON.stringify(queue)}`);