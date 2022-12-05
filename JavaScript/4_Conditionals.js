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
