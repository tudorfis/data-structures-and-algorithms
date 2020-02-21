"use strict";
exports.__esModule = true;
const stack = require("./stack");
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(capacity) {
        if (capacity <= 0) throw Error("capacity must be 1 or greater")
        this.items = new Array(capacity).fill(0);
        this.front = -1;
        this.count = 0;
    }
    PriorityQueue.prototype.isFull = function() {
        return ((this.count + this.front + 1) === this.items.length);
    }
    PriorityQueue.prototype.isEmpty = function() {
        return (this.count === 0);
    }
    PriorityQueue.prototype.extendQueue = function() {
        const newLength = this.items.length * 2;
        const newArray = new Array(newLength).fill(0);

        for (let i = 0; i < this.items.length; i++) {
            newArray[i] = this.items[i];
        }

        this.items = newArray;
    }
    PriorityQueue.prototype.shiftItemsToInsert = function(item) {
        let i;
        for (i = this.count + this.front; i >= 0; i--) {
            if (this.items[i] > item) {
                this.items[i + 1] = this.items[i];
            } else {
                break;
            }
        }
        return i + 1;
    }
    PriorityQueue.prototype.add = function(item) {
        if (this.isFull()) this.extendQueue();

        const pos = this.shiftItemsToInsert(item);
        this.items[pos] = item;
        this.count++;
    }
    PriorityQueue.prototype.remove = function() {
        if (this.isEmpty())
            throw Error('IllegalStateException');
        
        this.count--;
        return this.items[++this.front];
    }    
    PriorityQueue.prototype.peek = function() {
        if (this.isEmpty())
            throw Error('IllegalStateException');
        
        return this.items[this.front];
    }
    PriorityQueue.prototype.reverse = function(nr) {
        if (nr <= 1) throw Error('IllegalArgumentException');

        const revStack = new stack.Stack(nr);
        const start = this.front + 1;
        const end = nr + start;
        for (let i = start; i < end; i++) {
            revStack.push(this.items[i]);
        }

        let i = this.front;
        while(!revStack.isEmpty()) {
            this.items[++i] = revStack.pop();
        }
    }
    return PriorityQueue;
}());

module.exports = PriorityQueue;
