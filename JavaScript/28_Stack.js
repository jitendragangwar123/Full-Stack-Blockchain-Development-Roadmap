/*
Stack:-
    LIFO stands for Last-In-First-Out. 
This refers to the order in which elements move in and out of the data structure.

push() and pop():-
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
*/

//Stack.js
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

module.exports = Stack;

//config.js
module.exports = { 
    MAX_STACK_SIZE: 50,
}

//test.js
const Stack = require('../Stack');
const { assert } = require('chai');

let stack;
const item = "ITEM";
describe('Stack', function () {
    beforeEach(() => {
        stack = new Stack();
    });

    it('should have an empty items array', () => {
        assert(Array.isArray(stack.items), "There should be items array on stack");
        assert.equal(stack.items.length, 0, "The items array should have a length of zero");
    });
    
    it('should allow us to push an item', () => {
        stack.push(item);
        assert.equal(stack.items.length, 1, "The items array should have a length of 1 after a push");
        stack.push(item);
        assert.equal(stack.items.length, 2, "The items array should have a length of 2 after two pushes");
    });

    it('should allow us to pop an item', () => {
        stack.push(item);
        assert.equal(stack.items.length, 1, "The items array should have a length of 1 after a push");
        const popped = stack.pop();
        assert.equal(stack.items.length, 0, "The items array should have a length of 0 after a push/pop");
        assert.equal(popped, item, "Pop should return the popped item");
    });
});


//Overflow and Underflow
//Stack.js
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if(this.items.length===MAX_STACK_SIZE){
            throw new Error("Stack Overflow!");
        }
        this.items.push(item);
    }
    pop() {
        if(this.items.length===0){
            throw new Error("Stack Underflow!");
        }
        return this.items.pop();
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

module.exports = Stack;

//config.js
module.exports = { 
    MAX_STACK_SIZE: 50,
}

//test.js
const Stack = require('../Stack');
const { assert, expect } = require('chai');
const { MAX_STACK_SIZE } = require('../config');

const item = "ITEM";
let stack;
describe('Stack', function () {
    describe('Stage 2: Underflow & Overflow', () => {
        beforeEach(() => {
            stack = new Stack();
        });

        it('should not allow us to exceed the MAX_STACK_SIZE', () => {
            for (let i = 0; i < MAX_STACK_SIZE; i++) {
                stack.push(item);
            }
            expect(() => stack.push(item)).to.throw();
        });

        it('should not allow us to underflow', () => {
            expect(() => stack.pop()).to.throw();
        });
    });

    describe('Backwards Compatibility', () => {
        describe('Stage 1: Push & Pop', () => {
            beforeEach(() => {
                stack = new Stack();
            });

            it('should have an empty items array', () => {
                assert(Array.isArray(stack.items), "There should be items array on stack");
                assert.equal(stack.items.length, 0, "The items array should have a length of zero");
            });

            it('should allow us to push an item', () => {
                stack.push(item);
                assert.equal(stack.items.length, 1, "The items array should have a length of 1 after a push");
                stack.push(item);
                assert.equal(stack.items.length, 2, "The items array should have a length of 2 after two pushes");
            });

            it('should allow us to pop an item', () => {
                stack.push(item);
                assert.equal(stack.items.length, 1, "The items array should have a length of 1 after a push");
                stack.pop();
                assert.equal(stack.items.length, 0, "The items array should have a length of 0 after a push/pop");
            });
        });
    });
});
