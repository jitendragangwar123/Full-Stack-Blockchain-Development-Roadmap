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

// "&&" Operator
function canBreathe(isConnected, hasOxygen, aboveWater) {
    return (isConnected && hasOxygen || aboveWater)
        
}

module.exports = canBreathe;

//test.js
const canBreathe = require('../canBreathe');
const { assert } = require('chai');

describe('canBreathe', () => {
    describe('when above water', () => {
        it('should be able to breathe', () => {
            assert.equal(canBreathe(false, false, true), true);
            assert.equal(canBreathe(true, false, true), true);
            assert.equal(canBreathe(false, true, true), true);
            assert.equal(canBreathe(true, true, true), true);
        });
    });
    describe('when not above water', () => {
        describe('and not connected', () => {
            it('should not be able to breathe', () => {
                assert.equal(canBreathe(true, false, false), false);
                assert.equal(canBreathe(false, false, false), false);
            });
        });
        describe('and there is no oxygen', () => {
            it('should not be able to breathe', () => {
                assert.equal(canBreathe(false, true, false), false);
                assert.equal(canBreathe(false, false, false), false);
            });
        });
        describe('and is connected with oxygen', () => {
            it('should be able to breathe', () => {
                assert.equal(canBreathe(true, true, false), true);
            });
        });
    });
});
