"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack(length) {
        this.count = 0;
        this.count1 = 0;
        this.count2 = 0;
        this.items = new Array(length).fill(0);
    }
    Stack.prototype.push = function(item) {
        if (this.count === this.items.length) 
            throw Error('StackOverflowError');
        this.items[this.count] = item;
        this.count++;
    }
    Stack.prototype.pop = function() {
        if (this.isEmpty()) throw Error('IllegalStateException');
        return this.items[--this.count];
    }
    Stack.prototype.peek = function() {
        if (this.isEmpty()) throw Error('IllegalStateException');
        return this.items[this.count - 1];
    }
    Stack.prototype.isEmpty = function() {
        return (this.count === 0);
    }
    Stack.prototype.toString = function() {
        return [...this.items].splice(0, this.count).toString();
    }
    return Stack;
}());
exports.Stack = Stack;

// /** START TIME */
// const startTime = new Date().getTime();

// const stack = new Stack(7);
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log(stack.toString());

// console.log(stack.peek());  // 40
// console.log(stack.pop());   // 40
// console.log(stack.toString());

// console.log(stack.pop());   // 30
// console.log(stack.peek());  // 20
// console.log(stack.toString());

// console.log(stack.pop());
// console.log(stack.toString());

// /** END TIME */
// console.log(`=== Execution time: ${parseFloat((new Date().getTime() - startTime) / 1000).toFixed(2)} seconds ===`);