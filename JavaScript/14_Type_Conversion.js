/*
String to Number :-
Ex:1
const string = "2"
console.log(Number(string)); // 2

const string = "hello"
console.log(Number(string)); // NaN

Ex:2
const string = "2";
console.log(+string); // 2

const string2 = "hello";
console.log(+string2); // NaN

Ex:3
const float = 12.24;
console.log(parseInt(float)); // 12
console.log(parseFloat(float)); // 12.24

typeof() :
console.log( typeof 1 ); // number
console.log( typeof "1" ); // string
console.log( typeof {} ); // object
 */

//index.js
function toNumber(string) {
    return (+string) || 0;
}

module.exports = toNumber;

//test.js
const toNumber = require('../toNumber');
const { assert } = require('chai');

describe('toNumber', () => {
    describe('given a convertible number', () => {
        it('should convert it', () => {
            assert.strictEqual(toNumber("1"), 1);
            assert.strictEqual(toNumber("3"), 3);
            assert.strictEqual(toNumber("10"), 10);
        });
    });
    describe('given a non-convertible number', () => {
        it('should return zero', () => {
            assert.strictEqual(toNumber("a"), 0);
            assert.strictEqual(toNumber("pizza"), 0);
            assert.strictEqual(toNumber("abc123"), 0);
        });
    });
});


/*
const a = 123;

console.log(a.toString()); // "123"
console.log(String(a)); // "123"

console.log(false.toString()); // "false"

console.log(123 + ""); // "123"
console.log(true + ""); // "true"
console.log(2 + "2"); // "22"
*/

//index.js
function combineToString(a, b) {
    return (a+""+b);
}

module.exports = combineToString;

//test.js
const combineToString = require('../combineToString');
const { assert } = require('chai');

describe('combineToString', () => {
    describe('given two numbers', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(1,1), "11");
            assert.strictEqual(combineToString(5,10), "510");
        });
    });
    describe('given a number and a string', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(2, "2"), "22");
            assert.strictEqual(combineToString("5", 55), "555");
        });
    });
    describe('given a number and a boolean', () => {
        it('should combine them', () => {
            assert.strictEqual(combineToString(2, true), "2true");
            assert.strictEqual(combineToString(false, 55), "false55");
        });
    });
});

/*
Boolean Conversion 
console.log(Boolean(2)); // true
console.log(Boolean("")); // false
*/

//index.js
function isTruthy(a) {
    if(a){
        return true;
    }
    else{
        return false;
    }
}

module.exports = isTruthy;

//test.js
const isTruthy = require('../isTruthy');
const { assert } = require('chai');

describe('isTruthy', () => {
    describe('truthy values', () => {
        it('should be true', () => {
            assert(isTruthy(1));
            assert(isTruthy("message"));
            assert(isTruthy(true));
            assert(isTruthy({}));
        });
    });
    describe('falsey values', () => {
        it('should be false', () => {
            assert.isNotTrue(isTruthy(false));
            assert.isNotTrue(isTruthy(""));
            assert.isNotTrue(isTruthy(0));
            assert.isNotTrue(isTruthy(undefined));
        });
    });
});


//Loose Equals("==") and strict Equals("===")
function looseEquals(a, b) {
    if(a==b){
        return true;
    }
    else{
        return false;
    }
}

module.exports = looseEquals;

//test.js
const looseEquals = require('../looseEquals');
const { assert } = require('chai');

describe('looseEquals', () => {
    describe('comparing things of the same type', () => {
        describe('same value', () => {
            it('should be equal', () => {
                assert(looseEquals(1, 1));
                assert(looseEquals("a", "a"));
                assert(looseEquals(false, false));
            });
        });
        describe('different value', () => {
            it('should not be equal', () => {
                assert.isNotTrue(looseEquals(0, 1));
                assert.isNotTrue(looseEquals("a", "c"));
                assert.isNotTrue(looseEquals(false, true));
            });
        });
    });
    describe('comparing things of a different type', () => {
        describe('same loose value', () => {
            it('should be equal', () => {
                assert(looseEquals(1, true));
                assert(looseEquals("2", 2));
            });
        });
        describe('different value', () => {
            it('should not be equal', () => {
                assert.isNotTrue(looseEquals(0, true));
                assert.isNotTrue(looseEquals("5", 10));
            });
        });
    });
});


/*
:- JavaScript Object Notation, or JSON, is a format for transferring JavaScript data.

const person = JSON.stringify({ name: "Jim" });
console.log(person); // {"name":"Jim"}
*/

//index.js
function toJSON(obj) {
    let res=JSON.stringify(obj);
    return res;
    
}

module.exports = toJSON;

//test.js
const toJSON = require('../toJSON');
const { assert } = require('chai');

describe('toJSON', () => {
    it('should handle a blank object', () => {
        assert.equal(toJSON({}), "{}");
    });
    it('should handle a more complex object', () => {
        assert.equal(toJSON({ a: 2 }), '{"a":2}');
    });
});
