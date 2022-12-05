// functions 
function getMessage() {
     return "hello";
}

module.exports = getMessage;

//testing 
const getMessage = require('../getMessage');
const {assert} = require('chai');

it('should return a message', () => {
    assert(getMessage(), "it looks like nothing was returned from getMessage")
    assert.equal(typeof getMessage(), "string", "a string should be returned from getMessage");
});



//Operators
function addTwo(input) {
    return input+2;
}

module.exports = addTwo;

//testing 
const addTwo = require('../addTwo');
const {assert} = require('chai');

it('should add two', () => {
    assert.equal(addTwo(2), 4);
    assert.equal(addTwo(6), 8);
    assert.equal(addTwo(10), 12);
});

// multiplying two numbers
function product(a,b) {
    return a*b;
}

module.exports = product;

//testing 
const product = require('../product');
const {assert} = require('chai');

it('should multiple two numbers', () => {
    assert.equal(product(2,2), 4);
    assert.equal(product(6,10), 60);
    assert.equal(product(10,22), 220);
});


//Average of the numbers
function average(a, b, c, d) {
    const sum=a+b+c+d;
    const avg=sum/4;
    return avg
}

module.exports = average;

//testing 
const average = require('../average');
const {assert} = require('chai');

it('should give the average of the numbers', () => {
    assert.equal(average(2,4,6,8), 5);
    assert.equal(average(10,30,20,20), 20);
    assert.equal(average(0,2,7,3), 3);
});

// Math Library in JS
function getRandom() {
    return Math.random();

}

module.exports = getRandom;

//testing 
const getRandom = require('../getRandom');
const {assert} = require('chai');

it('should return a random number between 0 and 1', () => {
    const num1 = getRandom();
    assert.equal(typeof num1, "number");
    assert.isAtLeast(num1, 0);
    assert.isBelow(num1, 1);

    const num2 = getRandom();
    assert.equal(typeof num2, "number");
    assert.notEqual(num2, num1, "Attempted to get the random number twice and they were the same");
    assert.isAtLeast(num2, 0);
    assert.isBelow(num2, 1);
});


/*
The function Math.random generates a number between 0 and 1, not including 1.
// randomNumber will be between 0 and 100
>>const randomNumber = Math.random() * 100;
// randomNumber will be between 25 and 100
>>const randomNumber = (Math.random() * 75) + 25;
*/



// Math.floor()
function getFloor(x) {
    return Math.floor(x);
}

module.exports = getFloor;

//testing 
const getFloor = require('../getFloor');
const {assert} = require('chai');

it('should return the floor of a floating point', () => {
    assert.equal(getFloor(1.5), 1);
    assert.equal(getFloor(3.14), 3);
    assert.equal(getFloor(-12.312), -13);
});


