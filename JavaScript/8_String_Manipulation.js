//String Manipulation
function startsWithX(string) {
    if(string[0]==='x'){
        return true;
    }
    else{
        return false;
    }
}

module.exports = startsWithX;

//test.js
const startsWithX = require('../startsWithX');
const { assert } = require('chai');

describe('startsWithX', () => {
    it('should return true for a string starting with x', () => {
        assert.equal(startsWithX("x"), true);
        assert.equal(startsWithX("xpizza"), true);
    });

    it('should return false for a string not starting with x', () => {
        assert.equal(startsWithX("pizza"), false);
        assert.equal(startsWithX("zyx"), false);
    });
});
