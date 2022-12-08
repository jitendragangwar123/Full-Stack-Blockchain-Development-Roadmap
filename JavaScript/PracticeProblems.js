//Even/Odd Number 
function isEven(num) {
    if(num%2===0){
        return true;
    }
    else if(num%2!=0){
        return false;
    }
    else{
        return false;
    }
}

module.exports = isEven;

//test.js
const isEven = require('../isEven');
const { assert } = require('chai');

describe('isEven', () => {
    describe('even numbers', () => {
        it('should return true', () => {
            assert.equal(isEven(2), true);
        });
        it('should return true', () => {
            assert.equal(isEven(4), true);
        });
        it('should return true', () => {
            assert.equal(isEven(10), true);
        });
    });
    describe('odd numbers', () => {
        it('should return false', () => {
            assert.equal(isEven(1), false);
        });
        it('should return false', () => {
            assert.equal(isEven(3), false);
        });
        it('should return false', () => {
            assert.equal(isEven(9), false);
        });
    });
});

//
