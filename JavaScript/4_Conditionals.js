// '===' Operator
function isEqual(a, b) {
    if(a===b){
        return true;
    }
}

module.exports = isEqual;


//testing 
const isEqual = require('../isEqual');
const { assert } = require('chai');

describe('isEqual', () => {
    describe('if the values are equal', () => {
        it('should return true', () => {
            assert.equal(isEqual(2, 2), true);
        });
    });
});

// '!==' Operator
function isNotEqual(a, b) {
    if(a!==b){
        return true;
    }
}

module.exports = isNotEqual;

//testing 
const isNotEqual = require('../isNotEqual');
const { assert } = require('chai');

describe('isNotEqual', () => {
    describe('if the values are not equal', () => {
        it('should return true', () => {
            assert.equal(isNotEqual(1, 2), true);
        });
    });
});



// if-else statements
//isNotEqual.js
function isNotEqual(a, b) {
    if(a!==b){
        return true;
    }
    else {
        return false;
    }
}

module.exports = isNotEqual;

//testing 
//test.js
const isNotEqual = require('../isNotEqual');
const { assert } = require('chai');

describe('isNotEqual', () => {
    describe('if the values are equal', () => {
        it('should return false', () => {
            assert.equal(isNotEqual(1, 1), false);
        });
    });
    describe('if the values are not equal', () => {
        it('should return true', () => {
            assert.equal(isNotEqual(1, 2), true);
        });
    });
});


//Greater than 
function greater(first, last) {
    if(first>last){
        return first;
    }
    else if(first < last) {
        return last;
    }
    else{
    }
}

module.exports = greater;

//testing 
const greater = require('../greater');
const { assert } = require('chai');

describe('greater', () => {
    describe('if the first argument is greater', () => {
        it('should return it', () => {
            assert.equal(greater(5, 1), 5);
            assert.equal(greater(0, -1), 0);
        });
    });
    describe('if the second argument is greater', () => {
        it('should return it', () => {
            assert.equal(greater(1, 5), 5);
            assert.equal(greater(-1, 0), 0);
        });
    });
    describe('if the arguments are equal', () => {
        it('should return undefined', () => {
            assert.equal(greater(1, 1), undefined);
            assert.equal(greater(-1, -1), undefined);
        });
    });
});


// '>=' operator 
function isEnough(cost, money) {
    if(money>=cost){
        return true;
    }
    else{
        return false;
    }
}

module.exports = isEnough;

// testing 
const isEnough = require('../isEnough');
const { assert } = require('chai');

describe('isEnough', () => {
    describe('if there is more than enough money', () => {
        it('should return true', () => {
            assert.equal(isEnough(1, 2), true);
            assert.equal(isEnough(100, 120), true);
        });
    });
    describe('if there is not enough money', () => {
        it('should return false', () => {
            assert.equal(isEnough(1, 0), false);
            assert.equal(isEnough(100, 99), false);
        });
    });
    describe('if there is just enough money', () => {
        it('should return true', () => {
            assert.equal(isEnough(1, 1), true);
            assert.equal(isEnough(100, 100), true);
        });
    });
});
