LinkedList = /** @class */ (function () {
    Node = /** @class */ (function () {
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
        return JSON.stringify(this, null, 4);
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
    LinkedList.prototype.reverse = function() {
        if (this.count <= 1) return;
        const current = this.first;
        while(current !== null) {
            // const second = current.next;
            // second.next = current;
            // current = second;
        }
    }
    return LinkedList;
}());

var list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.reverse();
console.log(list.toArray());
