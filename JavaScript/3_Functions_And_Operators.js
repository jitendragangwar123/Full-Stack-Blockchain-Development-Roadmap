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
