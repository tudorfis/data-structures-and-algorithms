"use strict";
exports.__esModule = true;
const stack = require("./stack");
var StackQueue = /** @class */ (function () {
    function StackQueue(capacity) {
        if (capacity <= 0) throw Error("capacity must be 1 or greater")
        this.items = new Array(capacity).fill(0);
        this.stack1 = new stack.Stack(capacity);
        this.stack2 = new stack.Stack(capacity);
    }
    StackQueue.prototype.isEmpty = function() {
        return (this.stack1.isEmpty() && this.stack2.isEmpty());
    }
    StackQueue.prototype.moveStack1ToStack2 = function() {
        if (this.stack2.isEmpty())
            while (!this.stack1.isEmpty())
                this.stack2.push(this.stack1.pop());
    }
    StackQueue.prototype.enqueue = function(item) {
        this.stack1.push(item);        
    }
    StackQueue.prototype.dequeue = function() {
        if (this.isEmpty())
            throw Error('IllegalStateException');

        this.moveStack1ToStack2();
        return this.stack2.pop();
    }
    StackQueue.prototype.peek = function() {
        if (this.isEmpty())
            throw Error('IllegalStateException');
        
        this.moveStack1ToStack2();
        return this.stack2.peek();
    }
    return StackQueue;
}());
exports.StackQueue = StackQueue;

const queue = new StackQueue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
console.log(`${JSON.stringify(queue)}`);