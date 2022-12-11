// index.js
function willEat(hasPizza, hasDonuts, hasCookies) {
    if(hasPizza || hasDonuts || hasCookies){
        return true;
    }
    else{
        return false;
    }
}

module.exports = willEat;

//test.js
const willEat = require('../willEat');
const { assert } = require('chai');

describe('willEat', () => {
    describe('all variables are true', () => {
        it('should be true', () => {
            assert.equal(willEat(true, true, true), true);
        });
    });
    describe('one variable is true', () => {
        it('should be true', () => {
            assert.equal(willEat(true, false, false), true);
            assert.equal(willEat(false, true, false), true);
            assert.equal(willEat(false, false, true), true);
        });
    });
    describe('no variables are true', () => {
        it('should be false', () => {
            assert.equal(willEat(false, false, false), false);
        });
    });
});

//Default Operator "||"
function double(x) {
    const res= (x || 0) * 2;
    return res;
}

module.exports = double;

//test.js
const double = require('../double');
const { assert } = require('chai');

describe('configMessage', () => {
    describe('when there is a number passed', () => {
        it('should double it', () => {
            assert.equal(double(2), 4, "Did not return the double of 2!");
            assert.equal(double(4), 8, "Did not return the double of 4!");
            assert.equal(double(5), 10, "Did not return the double of 5!");
        });
    });
    describe('when there is no number passed', () => {
        it('should default to zero', () => {
            assert.equal(double(), 0, "Passing undefined for x should return 0");
        });
    });
});
