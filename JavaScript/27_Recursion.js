/*
Recursion:-
     A recursive function is a function that calls itself.
Ex:-
function countdown(n) {
    if(n === 0) {
        console.log('countdown complete!');
        return;
    }

    countdown(n - 1);
}
*/

//factorial.js
function factorial(n) {
    if(n===1){
        return 1;
    }
}

module.exports = factorial;

//test.js
const factorial = require('../factorial');
const { assert } = require('chai');

describe('factorial', () => {
    describe('base case', () => {
        it('should return 1', () => {
            assert.equal(factorial(1), 1);
        });
    });
});


//factorial.js
function factorial(n) {
    if(n===1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

module.exports = factorial;

//test.js
const factorial = require('../factorial');
const { assert } = require('chai');

describe('factorial', () => {
    describe('base case', () => {
        it('should return 1', () => {
            assert.equal(factorial(1), 1);
        });
    });

    describe('more cases', () => {
        it('should handle 2', () => {
            assert.equal(factorial(2), 2);
        });

        it('should handle 3', () => {
            assert.equal(factorial(3), 6);
        });

        it('should handle 4', () => {
            assert.equal(factorial(4), 24);
        });

        it('should handle 5', () => {
            assert.equal(factorial(5), 120);
        });
    });
});


/*
Walk Nodes:-
          Let's create a function that will find the last node in a list of nodes.
A node will have two properties:

id: A unique identifier
next: A reference to another node

// given a node, we can find node2 by using next
const node2 = node.next;

// node2 has its own id and next node reference
console.log(node2); // {id: 2, next: {…}}

// we can find node3 by using next on node2
const node3 = node2.next;

// node3 also has its own id and next node reference
console.log(node3); // {id: 3, next: {…}}

*/

//walk.js
function walk(node) {
    if(!node.next){
        return node;;
    }
}

module.exports = walk;

//test.js
const walk = require('../walk');
const { assert } = require('chai');

describe('Walk', () => {
    describe('base case', () => {
        it('return the node', () => {
            assert.deepEqual(walk({ id: 5 }), { id: 5 });
        });
    });
});
