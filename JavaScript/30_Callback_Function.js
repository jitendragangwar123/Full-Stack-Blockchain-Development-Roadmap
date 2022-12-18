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


/*
Dialog Callback:-
            onClose - This method will take a callback function as an argument and store it on our Dialog instance.
            close - This function will be used to close the dialog. When we close the dialog, we'll want to call the callbackFunction.

*/

//dialogCallback.js
class Dialog {
    constructor(){

    }
    close() {
        // invoke the callback
        this.callbackFunction();
    }
    onClose(callbackFunction) {
        // store the callback
        this.callbackFunction=callbackFunction;
    }

}

module.exports = Dialog;

//test.js
const Dialog = require('../dialogCallback');
const { assert } = require('chai');

describe('Dialog', () => {
    it('should allow me to register a callback', () => {
        const dialog = new Dialog();
        let called = false;
        dialog.onClose(() => {
            called = true;
        });
        dialog.close();
        assert(called, "Callback was not called after close");
    });
});
