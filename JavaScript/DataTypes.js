// index.js
//int datatype
const a=4;
const b=a;

module.exports = { a, b }


//test.js
const assert = require('assert');
const {a,b} = require('../index');

it('a and b should be equal', () => {
    assert.equal(a,b);
});


//index.js
//boolean datatype
const a=true;
const b=false;

module.exports = { a, b }

// test.js
const assert = require('assert');
const {a,b} = require('../index');

it('a should be boolean', () => {
    assert.equal(typeof a, 'boolean');
});

it('b should be boolean', () => {
    assert.equal(typeof b, 'boolean');
});

it('a should not equal b', () => {
    assert.notEqual(a,b);
});


//index.js
//string datatype
const a = "World";
const b = 'Jay';
//const c = `Hello ${a}, my name is ${b}!`;

module.exports = { a,b}

//test.js
const assert = require('assert');
const {a,b} = require('../index');

it('a should be a string', () => {
    assert.equal(typeof a, "string");
});

it('a should be "World"', () => {
    assert.equal(a, "World");
});

it('b should be a string', () => {
    assert.equal(typeof b, "string");
});

it('b should be "Hello World"', () => {
    assert.equal(b, "Hello World");
});
