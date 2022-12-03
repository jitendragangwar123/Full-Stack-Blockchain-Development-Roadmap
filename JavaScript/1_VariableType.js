// let is mutable
let a = 3;
a = 5;
module.exports = a; 

//testing
const assert = require('assert');
const a = require('../index');

it('a should equal 5', () => {
    assert.equal(a, 5);
});

// const is immutabe
const a = 3;
module.exports = a; 

//testing 
const assert = require('assert');
const a = require('../index');

it('a should equal 3', () => {
    assert.equal(a, 3);
});
