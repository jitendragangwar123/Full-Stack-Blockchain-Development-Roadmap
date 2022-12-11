/*
:- Typically you will see Error created with the new operator.
:- In JavaScript, new is commonly used when creating a new instance of an object.
:- Ex:
const a = 3;
if(a === 3) {
    throw new Error("we dont want a to be 3");
    }
*/

//Index.js
function throwError() {
    throw new Error("Error Cought!");
}

module.exports = throwError;

//test.js
const { assert } = require('chai');
const throwError = require('../throwError');

describe('throwError', () => {
    it('should throw an error', () => {
        let ex;
        try { 
            throwError();
        }
        catch(_ex) {
            ex = _ex;
        }
        assert(ex, "did not throw an error");
        assert.equal(ex.constructor, Error);
    });
});
