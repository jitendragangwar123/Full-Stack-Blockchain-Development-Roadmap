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

//Smaller Number
function smallerNumber(num1, num2) {
    if(num1>num2){
        return num2;
    }
    else{
        return num1;
    }
}

module.exports = smallerNumber;

//test.js
const { assert } = require('chai');
const smallerNumber = require('../smallerNumber');

describe('smallerNumber', () => {
    it('should return the smaller number', () => {
        assert.equal(smallerNumber(3, 5), 3);
    });

    it('should return the smaller number', () => {
        assert.equal(smallerNumber(10, 4), 4);
    });
})

//interpolation name
//index.js
const fakeName = require('./fakeName');
const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

module.exports = message;

//fakeName.js
const faker = require('faker');

module.exports = faker.name.findName()

//test.js
const assert = require('assert');
const actualMessage = require('../index');
const fakeName = require('../fakeName');

const expectedMessage = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

it('should replace the name', () => {
    const isEqual = (actualMessage === expectedMessage);

    if (!isEqual) {
        console.log("Your Message: ", actualMessage)
        console.log("Expected Message: ", expectedMessage)
        assert(false);
    }
    else {
        assert(true);
    }
});
