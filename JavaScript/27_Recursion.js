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
