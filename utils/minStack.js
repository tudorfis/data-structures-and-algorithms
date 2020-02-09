"use strict";
exports.__esModule = true;
const stack = require("../stack");
var MinStack = /** @class */ (function () {
    function MinStack(capacity) {
        this.stack = new stack.Stack(capacity);
        this.minStack = new stack.Stack(capacity);
    }
    MinStack.prototype.push = function(item) {
        this.stack.push(item);

        if (this.minStack.isEmpty())
            this.minStack.push(item);
        else if (item < this.minStack.peek())
            this.minStack.push(item);
    }
    MinStack.prototype.pop = function() {
        if (this.stack.isEmpty()) throw Error('IllegalStateException');

        const top = this.stack.pop();
        if (this.minStack.peek() === top)
            this.minStack.pop();

        return top;
    }
    MinStack.prototype.min = function() {
        return this.minStack.peek();
    }
    return MinStack;
}());
exports.MinStack = MinStack;

const minStack = new MinStack(7);

minStack.push(5);
minStack.push(2);
minStack.push(10);
minStack.push(1);
minStack.push(30);
minStack.push(40);

console.log(minStack.min());
minStack.pop();
minStack.pop();
minStack.pop();
console.log(minStack.min());
