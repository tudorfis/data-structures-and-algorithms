"use strict";
exports.__esModule = true;
var ExpressionEvaluator = /** @class */ (function () {
    function ExpressionEvaluator() {
        this.leftBrackets = ['(', '{', '[', '<', '_'];
        this.rightBrackets = [')', '}', ']', '>', '-'];

        if (this.leftBrackets.length !== this.rightBrackets.length) 
            throw Error('InvalidClassInitialization');
    }
    ExpressionEvaluator.prototype.empty = function(stack) {
        return (stack.length === 0);
    }
    ExpressionEvaluator.prototype._generateStack = function(input) {
        if (input === null || input === undefined || input === '') 
            throw Error('IllegalArgumentException');

        const stack = new Array();
        input.split('').forEach(char => {
            stack.push(char);
        });
        return stack;
    }
    ExpressionEvaluator.prototype.reverseString = function(input) {
        const stack = this._generateStack(input);
        let reserved = '';
        while (!this.empty()) {
            reserved += stack.pop();
        }
        return reserved;
    }
    ExpressionEvaluator.prototype._isLeftBracket = function(char) {
        return (this.leftBrackets.indexOf(char) !== -1);
    }
    ExpressionEvaluator.prototype._isRightBracket = function(char) {
        return (this.rightBrackets.indexOf(char) !== -1);
    }
    ExpressionEvaluator.prototype._bracketsMatch = function(left, right) {
        return (this.leftBrackets.indexOf(left) === this.rightBrackets.indexOf(right));
    }
    ExpressionEvaluator.prototype.isBalanced = function(input) { 
        const stack = new Array();
        const inputArr = input.split('');
        for (let i = 0; i < inputArr.length; i++) {
            const ch = inputArr[i];

            if (this._isLeftBracket(ch))
                stack.push(ch);

            if (this._isRightBracket(ch)) {
                if (this.empty(stack)) return false;
                if (!this._bracketsMatch(stack.pop(ch), ch)) return false;
            }
        }
        return (this.empty(stack));
    }
    return ExpressionEvaluator;
}());
exports.ExpressionEvaluator = ExpressionEvaluator

/** START TIME */
const startTime = new Date().getTime();

const expressionEvaluator = new ExpressionEvaluator();
console.log(expressionEvaluator.isBalanced('(1 + 2}'));           // false
console.log(expressionEvaluator.isBalanced('(1 + 2))'));          // false
console.log(expressionEvaluator.isBalanced(')1 + 2('));           // false
console.log(expressionEvaluator.isBalanced('[1 + 2]'));           // true
console.log(expressionEvaluator.isBalanced('[1 + 2](a)'));        // true
console.log(expressionEvaluator.isBalanced('[1 + 2](a)]'));       // false
console.log(expressionEvaluator.isBalanced('(([1 + 2])(a)])'));   // false
console.log(expressionEvaluator.isBalanced('(([1 + 2])(a))'));    // true
console.log(expressionEvaluator.isBalanced('[([1 + 2])(a])'));    // false
console.log(expressionEvaluator.isBalanced('_([1 + 2])(a)-'));    // true

// for (let x = 1; x < 10 * 1000 * 1000; x++) {
//     expressionEvaluator.isBalanced('(([1 + 2])(a)])');   // false  
// }

/** END TIME */
console.log(`=== Execution time: ${parseFloat((new Date().getTime() - startTime) / 1000).toFixed(2)} seconds ===`);