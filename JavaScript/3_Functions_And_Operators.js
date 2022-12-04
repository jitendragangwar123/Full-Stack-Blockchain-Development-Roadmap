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


