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

/*
//The EISDIR is thrown in Node.JS when the target is a directory when we were expecting it to be a file.

const text = readFile("book");
try {
    readFile("book"); 
}
catch(ex) {
    console.log(ex); // EISDIR: illegal operation
}
*/

//index.js
function catchError(fn) {
    try{
        fn();
    }
    catch(ex){

    }
}

module.exports = catchError;

//test.js
const { assert } = require('chai');
const catchError = require('../catchError');

describe('catchError', () => {
    it('should catch a thrown error', () => {
        let ex;
        try {
            catchError(() => {
                throw new Error();
            });
        }
        catch (_ex) {
            ex = _ex;
        }
        assert(!ex, "the error should have been caught");
    });
});

/*
function writeLogFile(id, contents) {
    try {
        writeFile(`logs/${id}`, contents);
    }
    catch(ex) {
        return false;
    }
    return true;
}
*/

//index.js
function catchError(fn) {
    try{
        fn();
    }
    catch(ex){
        return ex;

    }
    return false;
}

module.exports = catchError;

//test.js
const { assert } = require('chai');
const catchError = require('../catchError');

describe('catchError', () => {
    it('should catch a thrown error', () => {
        let ex;
        try { 
            catchError(() => {
                throw new Error();
            });
        }
        catch(_ex) {
            ex = _ex;
        }
        assert(!ex, "the error should have been caught");
    });
    
    it('should return the thrown error', () => {
        let expected = new Error();
        let actual = catchError(() => {
            throw expected;
        });
        assert.equal(actual, expected, "Should have returned the same error that was caught");
    });

    it('should return false when no error is thrown', () => {
        let ex = catchError(() => {});
        assert.equal(ex, false);
    });
});

//index.js
function startError() {
    let x=0;
    x(); // TypeError
    new array(Infinity); // Range Error
    x.72; //SyntaxError
    
}

module.exports = startError;

//test.js
const { assert } = require('chai');
const startError = require('../startError');

describe('startError', () => {
    it('should throw a subclass of error', () => {
        let ex;
        try {
            startError();
        }
        catch (_ex) {
            ex = _ex;
        }
        assert(ex, "did not throw an error");
        console.log(ex);
        assert.equal(ex.__proto__.__proto__.constructor, Error);
    });
});
