"use strict";
exports.__esModule = true;
const LinkedList = /** @class */ (function () {
    const Node = /** @class */ (function () {
        function Node(value) {
            this.value = value;
            this.next = null;
        }
        return Node;
    }());

    function LinkedList() {
        this._first = null;
        this._last = null;
        this._size = 0;
    }
    LinkedList.prototype.isEmpty = function () {
        return (this._first === null);
    };
    LinkedList.prototype.getPrevious = function (node) {
        let current = this._first;
        while (current !== null) {
            if (current.next === node) return current;
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.handleEmptyOrOne = function () {
        if (this.isEmpty())
            return false;
        if (this._first === this._last) {
            this._first = this._last = null;
            this._size = 0;
            return false;
        }
        return true;
    };
    LinkedList.prototype.addLast = function (item) {
        const node = new Node(item);
        if (this.isEmpty()) {
            this._first = this._last = node;
        }
        else {
            this._last.next = node;
            this._last = node;
        }
        this._size++;
    };
    LinkedList.prototype.addFirst = function (item) {
        const node = new Node(item);
        if (this.isEmpty()) {
            this._first = this._last = node;
        }
        else {
            node.next = this._first;
            this._first = node;
        }
        this._size++;
    };
    LinkedList.prototype.indexOf = function (item) {
        let index = 0;
        let current = this._first;
        while (current !== null) {
            if (current.value === item)
                return index;
            current = current.next;
            index++;
        }
        return -1;
    };
    LinkedList.prototype.contains = function (item) {
        return (this.indexOf(item) !== -1);
    };
    LinkedList.prototype.removeFirst = function () {
        if (!this.handleEmptyOrOne()) return;
        const second = this._first.next;
        this._first.next = null;
        this._first = second;
        this._size--;
    };
    LinkedList.prototype.removeLast = function () {
        if (!this.handleEmptyOrOne())
            return;
        const previous = this.getPrevious(this._last);
        this._last = previous;
        this._last.next = null;
        this._size--;
    };
    LinkedList.prototype.size = function () {
        return this._size;
    };
    LinkedList.prototype.print = function () {
        console.log(`${JSON.stringify(this, null, 4)}`);
    };
    LinkedList.prototype.printString = function () {
        return console.log(this);
    };
    LinkedList.prototype.toArray = function () {
        const array = new Array(this._size);
        let current = this._first;
        let index = 0;
        while (current !== null) {
            array[index] = current.value;
            current = current.next;
            index++;
        }
        return array;
    };
    /** my solution
    LinkedList.prototype.reverse = function() {
        if (this.count <= 1) return;
        const ref = this;
        swtchFL = function() {
            const proxy = ref._last;
            ref._last = ref._first;
            ref._first = proxy;
        }
        doR = function(f,s) {
            t = s.next;
            s.next = f;
            if (t.next) {
                doR(s,t);
            } else {
                t.next = s;
                swtchFL();
            }
        }
        const f = this._first;
        const s = f.next;
        this._first.next = null
        doR(f, s);
    }
    */
    LinkedList.prototype.reverse = function() {
        if (this.isEmpty()) throw Error('IllegalStateException');;

        let previous = this._first;
        let current = this._first.next;
        while(current !== null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this._last = this._first;
        this._last.next = null;
        this._first = previous;
    }
    LinkedList.prototype.getKthFromTheEnd = function(k) {
        if (this.isEmpty()) throw Error('IllegalStateException');
        
        let a = this._first;
        let b = this._first
        for (let i = 0; i < k - 1; i++) {
            b = b.next;
            if (b === null) {
                throw Error('IllegalArgumentException');
            }
        }
        while (b !== this._last) {
            a = a.next;
            b = b.next;
        }
        return a.value;
    }
    LinkedList.prototype.printMiddle = function() {
        if (this.isEmpty()) throw Error('IllegalStateException');
        let a = this._first;
        let b = this._first;
        while (b !== this._last && b.next !== this._last) {
            b = b.next.next;
            a = a.next;
        }
        return (b === this._last) ? a.value : a.next.value
    }
    LinkedList.prototype.hasLoop = function() {
        let slow = this._first;
        let fast = this._first;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }
    return LinkedList;
}());
exports.LinkedList = LinkedList;

/** START TIME */
// const startTime = new Date().getTime();

// var list = new LinkedList();
// (arr = new Array(30 * 1000)).fill(1).some(item => {
//     list.addLast(item);
// })
// arr.some(() => {
//    list.reverse() 
// });


/** END TIME */
// console.log(`=== Execution time: ${parseFloat((new Date().getTime() - startTime) / 1000).toFixed(2)} seconds ===`);