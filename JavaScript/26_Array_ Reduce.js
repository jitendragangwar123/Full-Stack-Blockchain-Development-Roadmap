/*
Array Reduce:-
        In the reduce function, two arguments are provided, an accumulator and the current value. 
        In the case of summing numbers, the accumulator is the sum after each iteration. The current value will be each element in turn.
*/

//sum.js
// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator+currentValue;// <-- sum the numbers here!
    });
}

module.exports = sum;

//test.js
const sum = require('../sum');
const { assert } = require('chai');

describe('sum', function () {
    it('should sum one elements', () => {
        assert.equal(sum([1]), 1);
    });

    it('should sum five elements', () => {
        assert.equal(sum([1,2,3,4,5]), 15);
    });

    it('should sum 10 elements', () => {
        assert.equal(sum([1,2,3,4,5,6,7,8,9,10]), 55);
    });
});


//Largest Value 
//largest.js
// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator>currentValue ? accumulator:currentValue; // <-- determine largest value
    });
}

module.exports = largest;

//test.js
const largest = require('../largest');
const { assert } = require('chai');

describe('largest', function () {
    it('should take the largest of 1 element', () => {
        assert.equal(largest([1]), 1);
    });

    it('should take the largest of 5 elements', () => {
        assert.equal(largest([3,4,1,2,5]), 5);
    });

    it('should take the largest of 10 elements', () => {
        assert.equal(largest([2,8,4,10,1,9,3,5,6,7]), 10);
    });
});
