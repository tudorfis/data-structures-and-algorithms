"use strict";
exports.__esModule = true;
const stack = require("./stack");
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue(capacity) {
        if (capacity <= 0) throw Error("capacity must be 1 or greater")
        this.items = new Array(capacity).fill(0);
        this.rear = 0;
        this.front = 0;
        this.count = 0;
    }
    ArrayQueue.prototype.isFull = function() {
        return (this.count === this.items.length);
    }
    ArrayQueue.prototype.isEmpty = function() {
        return (this.count === 0);
    }
    ArrayQueue.prototype.enqueue = function(item) {
        if (this.isFull())
            throw Error('IllegalStateException');
        
        this.items[this.rear] = item;
        this.rear = (this.rear + 1) % this.items.length;
        this.count++
    }
    ArrayQueue.prototype.dequeue = function() {
        if (this.isEmpty())
            throw Error('IllegalStateException');
        
        const item = this.items[this.front];
        this.items[this.front] = 0;
        this.front = (this.front + 1) % this.items.length;
        this.count--;
        
        return item;
    }
    ArrayQueue.prototype.peek = function() {
        if (this.isEmpty())
            throw Error('IllegalStateException');
        
        return this.items[this.front];
    }
    return ArrayQueue;
}());
exports.ArrayQueue = ArrayQueue;

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