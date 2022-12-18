/*
Callback Function:-
            :-functions are first-class objects. This means, just like objects, functions can be stored in variables, 
            returned from functions, and passed into other functions as arguments.
            :-With callback functions, we will be passing functions into other functions to be called at a very specific time.

Ex:-
function simpleFunction(fn) {
    // invoke the callback function
    fn();
}

simpleFunction(function callbackFunction() {
    console.log('hi');
});
*/

//runCallback.js
/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    callbackFunction();

}

module.exports = runCallback;

//test.js
const runCallback = require('../runCallback');
const { assert } = require('chai');

describe('Run Callback', () => {
    it('should run a function immediately', () => {
        let called = false;
        runCallback(() => {
            called = true;
        });
        assert(called, "Callback was not called");
    });
});


/*
Asynchronous Callback:- 
            In setTimeout, we give it a callback to run after a period of time (in milliseconds). 
            The first argument to the function is the callback and the second argument is the number 
            of milliseconds to wait before running the callback function.
*/

//runCallback.js
/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    setTimeout(()=>{
         callbackFunction()
    },1000);
}

module.exports = runCallback;

//test.js
const runCallback = require('../runCallback');
const { assert } = require('chai');

describe('Run Callback Async', () => {
    it('should not run a function immediately', () => {
        let called = false;
        runCallback(() => {
            called = true;
        });
        assert(!called, "Callback was called immediately");
    });

    it('should not run a function before 500 milliseconds', (done) => {
        let called = false;
        runCallback(() => {
            called = true;
        });
        setTimeout(() => {
            assert(!called, "Callback was called before 500 milliseconds");
            done();
        }, 500);
    });

    it('should run a function before 1500 milliseconds', (done) => {
        let called = false;
        runCallback(() => {
            called = true;
        });
        setTimeout(() => {
            assert(called, "Callback was not called before 1500 milliseconds");
            done();
        }, 1500);
    });
});
