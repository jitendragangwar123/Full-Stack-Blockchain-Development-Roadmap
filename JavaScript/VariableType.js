const a=4;
const b=a;

module.exports = { a, b }


//testing
const assert = require('assert');
const {a,b} = require('../index');

it('a and b should be equal', () => {
    assert.equal(a,b);
});
