
// We always use queue1 for pushing new items.
// When popping an item, we move all the items
// except the last one from queue1 to queue2.
//
// Q1 [10, 20, 30, 40] => Q1 [40]
// Q2 []               => Q2 [10, 20, 30]
//
// Now the item to be popped is in Q1. We remove
// and return that as the item on top of the stack.
//
// Q1 []
// Q2 [10, 20, 30]
//
// We should swap the queues, so we can repeat this
// algorithm next time we need to pop the stack.
//
// Q1 [10, 20, 30]
// Q2 []  (ready for moving items)


"use strict";
exports.__esModule = true;
const arrayDeque = require('./arrayQueue');
var StackWithTwoQueues = /** @class */ (function () {
    function StackWithTwoQueues() {
        this.queue1 = new arrayDeque.ArrayQueue();
        this.queue2 = new arrayDeque.ArrayQueue();
        this.top = null;
    }
    // O(1)
    StackWithTwoQueues.prototype.push = function(item) {
        this.queue1.add(item);
        this.top = item;
    }
    // O(n)
    StackWithTwoQueues.prototype.pop = function() {
        if (this.isEmpty()) throw Error('IllegalStateException');

        while(this.queue1.size() > 1) {
            this.top = this.queue1.remove();
            this.queue2.add(this.top);
        }
        this.swapQueues();
        return this.queue2.remove();
    }
    StackWithTwoQueues.prototype.swapQueues = function() {
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }
    // O(1)
    StackWithTwoQueues.prototype.isEmpty = function() {
        return this.queue1.isEmpty();
    }
    // O(1)
    StackWithTwoQueues.prototype.size = function() {
        return this.queue1.size();
    }
    // O(1)
    StackWithTwoQueues.prototype.peek = function() {
        if (this.isEmpty()) throw Error('IllegalStateException');
        return this.top;
    }
    return StackWithTwoQueues;
}());
