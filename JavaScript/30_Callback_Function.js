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
