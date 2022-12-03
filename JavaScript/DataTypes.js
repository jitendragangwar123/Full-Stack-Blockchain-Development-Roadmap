// index.js
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
