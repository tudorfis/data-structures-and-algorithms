"use strict";
exports.__esModule = true;
var TwoStacks = /** @class */ (function () {
    function TwoStacks(capacity) {
        if (capacity <= 0) throw Error("capacity must be 1 or greater")
        this.items = new Array(capacity).fill(0);
        this.top1 = -1;
        this.top2 = capacity;
    }
    TwoStacks.prototype.isEmpty1 = function() {
        return (this.top1 === -1);
    }
    TwoStacks.prototype.isFull1 = function() {
        return (this.top1 + 1 === this.top2);
    }
    TwoStacks.prototype.push1 = function(item) {
        if (this.isFull1()) throw Error('IllegalStateException');
        this.items[++this.top1] = item;
    }
    TwoStacks.prototype.pop1 = function() {
        if (this.isEmpty1()) throw Error('IllegalStateException');
        return this.items[this.top1--];
    }
    TwoStacks.prototype.isEmpty2 = function() {
        return (this.top2 === this.items.length);
    }
    TwoStacks.prototype.isFull2 = function() {
        return (this.top2 - 1 === this.top1);
    }
    TwoStacks.prototype.push2 = function(item) {
        if (this.isFull2()) throw Error('IllegalStateException');
        this.items[--this.top2] = item;
    }
    TwoStacks.prototype.pop2 = function() {
        if (this.isEmpty2()) throw Error('IllegalStateException');
        return this.items[this.top2++];
    }
    TwoStacks.prototype.print = function() {
        console.log(`${JSON.stringify(this, null, 4)}`);
    }
    return TwoStacks;
}());
exports.TwoStacks = TwoStacks;

/** START TIME */
const startTime = new Date().getTime();

const twoStack = new TwoStacks(7);
twoStack.push1(10);
twoStack.push1(20);
twoStack.push1(30);

twoStack.push2(100);
twoStack.push2(200);
twoStack.push2(300);
twoStack.push2(400);

twoStack.pop1();
twoStack.push2(500);

twoStack.pop2();
twoStack.push1(40);

twoStack.print();

/** END TIME */
console.log(`=== Execution time: ${parseFloat((new Date().getTime() - startTime) / 1000).toFixed(2)} seconds ===`);