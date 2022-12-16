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


//isEmpty() and peek()
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
        return this.items.length===0;
        
    }
    peek() {
        return this.items[this.items.length-1];
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
    describe('Stage 3: isEmpty & Peek', () => {
        beforeEach(() => {
            stack = new Stack();
        });

        it('should allow us to peek that top item', () => {
            const uniqueItem = "item5";
            stack.push(item);
            stack.push(item);
            stack.push(uniqueItem);
            assert.equal(stack.peek(), uniqueItem);
        });
        
        it('should properly detect an empty stack', () => {
            assert(stack.isEmpty(), "the stack should initially be empty");
            stack.push(item);
            assert(!stack.isEmpty(), "after pushing the stack should not be empty");
            stack.pop();
            assert(stack.isEmpty(), "after pushing and popping the stack should be empty");
        });
    });

    describe('Backwards Compatibility', () => {
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

//UNDO & REDO OPERATIONS
//OperationsManager.js
const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations=new Stack();
        this.undos=new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        
    }

    redo() {
        
    }

    redoAll() {
        
    }
}

module.exports = OperationManager;

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
        return this.items.length===0;
        
    }
    peek() {
        return this.items[this.items.length-1];
    }
}

module.exports = Stack;

//config.js
module.exports = { 
    MAX_STACK_SIZE: 50,
}

//test.js
const Stack = require('../Stack');
const OperationsManager = require('../OperationsManager');
const { assert } = require('chai');

const operation = "OPERATION";
let operationsManager;
describe('Operations Manager', () => {
    beforeEach(() => {
        operationsManager = new OperationsManager();
    });

    it('should have an undos stack', () => {
        assert(operationsManager.undos, "Could not find an undos property on OperationsManager");
        assert(operationsManager.undos instanceof Stack, "Expected undos to be an instance of Stack");
    });

    it('should have an operations stack', () => {
        assert(operationsManager.operations, "Could not find an operations property on OperationsManager");
        assert(operationsManager.operations instanceof Stack, "Expected operations to be an instance of Stack");
    });

    it('should allow us to add an operation', () => {
        operationsManager.addOperation(operation);
        assert.equal(operationsManager.operations.peek(), operation, "should have added an operation to operations stack");
    });
});


//Undo & Redo 
//OperationsManager.js
const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        const operation = this.operations.pop();
        this.undos.push(operation);
    }

    redo() {
        const operation = this.undos.pop();
        this.operations.push(operation);
    }
}

module.exports = OperationManager;

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
        return this.items.length===0;
        
    }
    peek() {
        return this.items[this.items.length-1];
    }
}

module.exports = Stack;

//config.js
module.exports = { 
    MAX_STACK_SIZE: 50,
}

//test.js
const OperationsManager = require('../OperationsManager');
const { assert } = require('chai');

let operationsManager;
describe('Operations Manager', () => {
    beforeEach(() => {
        operationsManager = new OperationsManager();
    });

    describe('after an undo', () => {
        const operation1 = "OPERATION_1";
        beforeEach(() => {
            operationsManager.addOperation(operation1);
            operationsManager.undo();
        });

        it('should have added to the undos', () => {
            assert.equal(operationsManager.undos.peek(), operation1);
        });

        it('should have an empty set of operations', () => {
            assert(operationsManager.operations.isEmpty());
        });

        describe('after a subsequent redo', () => {
            beforeEach(() => {
                operationsManager.redo();
            });

            it('should have added back to the operations', () => {
                assert.equal(operationsManager.operations.peek(), operation1);
            });

            it('should have an empty set of undos', () => {
                assert(operationsManager.undos.isEmpty());
            });
        });
    });
});


//Redo All
//OperationsManager.js
const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        const operation = this.operations.pop();
        this.undos.push(operation);
    }

    redo() {
        const operation = this.undos.pop();
        this.operations.push(operation);
    }
    
    redoAll(){
        while(!this.undos.isEmpty()){
            this.redo();
        }
    }
}

module.exports = OperationManager;

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
        return this.items.length===0;
        
    }
    peek() {
        return this.items[this.items.length-1];
    }
}

module.exports = Stack;

//config.js
module.exports = { 
    MAX_STACK_SIZE: 50,
}

//test.js
const OperationsManager = require('../OperationsManager');
const { assert } = require('chai');

let operationsManager;
describe('Operations Manager', () => {
    beforeEach(() => {
        operationsManager = new OperationsManager();
    });

    describe('after several undos', () => {
        const operation1 = "OPERATION_1";
        const operation2 = "OPERATION_2";
        const operation3 = "OPERATION_3";
        beforeEach(() => {
            operationsManager.addOperation(operation1);
            operationsManager.addOperation(operation2);
            operationsManager.addOperation(operation3);
            operationsManager.undo();
            operationsManager.undo();
            operationsManager.undo();
            operationsManager.redoAll();
        });

        it('should have the last operation at the top of the operation stack', () => {
            assert.equal(operationsManager.operations.peek(), operation3);
        });

        describe('after a subsequent undo', () => {
            beforeEach(() => {
                operationsManager.undo();
            });

            it('should have the second operation at the top of the operation stack', () => {
                assert.equal(operationsManager.operations.peek(), operation2);
            });
        });
    });
});
