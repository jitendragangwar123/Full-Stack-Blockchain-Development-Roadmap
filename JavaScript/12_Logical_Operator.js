/*
:- "||" can be referred to as the Logical OR operator or the default operator.
:- Similarily, the "&&" operator can be referred to as the Logical AND operator or the guard operator!
*/
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

/*
const user = { name: 'bob' }
console.log(user && user.name); // bob

// if we tried to retrieve this property directly, we would hit a run-time exception
const user2 = undefined;
console.log(user2.name); // run-time error

const user2 = undefined;
console.log(user2 && user2.name); // undefined
*/

//index.js
function friendName(friend) {
    return (friend && friend.name);
}

module.exports = friendName;

//test.js
const friendName = require('../friendName');
const { assert } = require('chai');

describe('friendName', () => {
    describe('when friend is defined', () => {
        it('should get the name', () => {
            assert.equal(friendName({ name: 'Bob' }), 'Bob');
            assert.equal(friendName({ name: 'Jim' }), 'Jim');
        });
    });
    describe('when friend is undefined', () => {
        it('should return undefined', () => {
            assert.equal(friendName(), undefined);
        });
    });
});

// NOT operator 
function carCrossing(aCrossing, bCrossing) {
    return (aCrossing && !bCrossing) || (!aCrossing && bCrossing);
}

module.exports = carCrossing;

//test.js
//Exclusive OR
const carCrossing = require('../carCrossing');
const { assert } = require('chai');

describe('carCrossing', () => {
    describe('when a is crossing and not b', () => {
        it('should allow a to cross', () => {
            assert.equal(carCrossing(true, false), true);
        });
    });
    describe('when both are crossing', () => {
        it('should be stalemate', () => {
            assert.equal(carCrossing(true, true), false);
        });
    });
    describe('when both are crossing', () => {
        it('should allow b to cross', () => {
            assert.equal(carCrossing(false, true), true);
        });
    });
    describe('when neither are crossing', () => {
        it('should not be true', () => {
            assert.equal(carCrossing(false, false), false);
        });
    });
});
