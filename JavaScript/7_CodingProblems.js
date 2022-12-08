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

//Check Number
//index.js
function checkNumber(num) {
    if(num===0){
        return "zero";
    }
    else if(num<0){
        return "negative";
    }
    else{
        return "positive";
    }
}

module.exports = checkNumber;

//test.js
const { assert } = require('chai');
const checkNumber = require('../checkNumber');

describe('checkNumber', () => {
    it('should return positive', () => {
        assert.equal(checkNumber(15), 'positive');
    });

    it('should return negative', () => {
        assert.equal(checkNumber(-5), 'negative');
    });

    it('should return zero', () => {
        assert.equal(checkNumber(0), 'zero');
    });
})

//maxSum
//index.js
function maxSum(num) {
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}

module.exports = maxSum;

//test.js
const { assert } = require('chai');
const maxSum = require('../maxSum');

describe('maxSum', () => {
    it('should return zero', () => {
        assert.equal(maxSum(0), 0);
    });

    it('should return the max sum of 1', () => {
        assert.equal(maxSum(1), 1);
    });

    it('should return the max sum of positive integer', () => {
        assert.equal(maxSum(5), 15);
    });

    it('should return zero for a negative integer', () => {
        assert.equal(maxSum(-5), 0)
    })
})

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

