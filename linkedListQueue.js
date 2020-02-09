"use strict";
exports.__esModule = true;
var LinkedListQueue = /** @class */ (function () {
    var Node = /** @class */ (function () {
        function Node(value) {
            this.value = value;
            this.next = null;
        }
        return Node;
    })();
    function LinkedListQueue() {
        this.first = null;
        this.last = null;
        this._size = 0;
    }
    LinkedListQueue.prototype.enqueue = function(value) {
        if (this.first === null)  this.first = this.last = new Node(value);
        else {
            const item = new Node(value);
            
            let current = this.first;
            while(current !== null) {
                if (current.next === null) {
                    current.next = item;
                    break;
                } else {
                    current = current.next;
                }
            }
            this.last = item;
        }
        this._size++;
    }
    LinkedListQueue.prototype.dequeue = function() {
        const value = this.first.value;
        this.first = this.first.next;
        this._size--;
        return value;
    }
    LinkedListQueue.prototype.peek = function() {
        return this.first.value;
    }
    LinkedListQueue.prototype.size = function() {
        return this._size;
    }
    LinkedListQueue.prototype.isEmpty = function() {
        return (this._size === 0);
    }
    LinkedListQueue.prototype.print = function() {
        console.log(`${JSON.stringify(list, null, 4)}`);
    }
    return LinkedListQueue;
}());
exports.LinkedListQueue = LinkedListQueue;

const list = new LinkedListQueue();

list.enqueue(10);
list.enqueue(20);
list.enqueue(30);
list.enqueue(40);
list.enqueue(50);

list.print();

console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());

list.print();

list.enqueue(60);
list.enqueue(70);
list.enqueue(80);

list.print();

console.log(list.peek());
console.log(list.size());
console.log(list.isEmpty());

console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());

console.log(list.isEmpty());

list.print();
