"use strict";
exports.__esModule = true;
var _Array = /** @class */ (function () {
    function _Array(length) {
        length = length || 0;
        this._items = new Array(length);
        this.count = 0;
    }
    _Array.prototype._resizeIfRequired = function() {
        if (this._items.length === this.count) {
            const newLength = (this._items.length === 0) 
                ? 1 : this._items.length;
            let newItems = new Array(newLength * 2);
            for (let i = 0; i < this.count; i++) {
                newItems[i] = this._items[i];
            }
            this._items = newItems;
        }
    }
    _Array.prototype.insert = function(item) {
        this._resizeIfRequired();
        this._items[this.count++] = item;
    }
    _Array.prototype.insertAt = function(item, index) {
        if (index < 0 || index > this.count) {
            throw new Error('IllegalArgumentException');
        }

        this._resizeIfRequired();
        for (let i = this.count - 1; i >= index; i--) 
            this._items[i + 1] = this._items[i];
        
        this._items[index] = item;
        this.count++;
    }
    _Array.prototype.reverse = function() {
        const newItems = new Array(this.length);
        for (let i = 0; i < this.count; i++) {
            newItems[i] = this._items[this.count - i - 1];
        }
        this._items = newItems;
    }
    _Array.prototype.max = function() {
        let max = 0;
        this._items.forEach(item => {
            if (item > max) {
                max = item;
            }
        });
        return max;
    }
    _Array.prototype.intersect = function(otherArr) {
        const intrArr = new _Array(0);
        this._items.forEach(item => {
            if (otherArr.indexOf(item) >= 0) {
                intrArr.insert(item);
            }
        })
        return intrArr;
    }
    _Array.prototype.removeAt = function(index) {
        if (index < 0 || index >= this.count) {
            throw new Error('IllegalArgumentException');
        }
        if (this.count > 0) {
            for (let i = index; i < this.count; i++) {
                this._items[i] = this._items[i + 1];
            }
            this.count--;
        }
    }
    _Array.prototype.indexOf = function(item) {
        for (let i = 0; i < this.count; i++) {
            if (item === this._items[i]) return i;
        }
        return -1;
    }
    _Array.prototype.print = function () {
        return console.log(`${JSON.stringify(this, null, 4)}`);
    };
    return _Array;
}());
exports._Array = Array;


/** START TIME */
var start = new Date().getTime();

const arr = new _Array(3);
arr.insert(1);
arr.insert(2);
arr.insert(3);
arr.insert(4);
arr.insert(5);
arr.insert(6);

// arr.insertAt(100, 2);
// arr.reverse();
// console.log(arr.max());

// const arr2 = new _Array(2);
// arr2.insert(3);
// arr2.insert(4);

// console.log(arr.intersect(arr2));

arr.print();


/** END TIME */
var end = new Date().getTime();
var time = end - start;
console.log(`=== Execution time: ${time} ===`);