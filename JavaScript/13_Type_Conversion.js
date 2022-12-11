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
