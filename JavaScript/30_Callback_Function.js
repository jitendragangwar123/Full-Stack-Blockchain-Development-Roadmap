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


//Multiple Dialog Callbacks
//dialogCallback.js
class Dialog {
    constructor() {
        this.callbackFunctions = [];
    }
    close() {
        this.callbackFunctions.forEach((callbackFn) => {
            callbackFn();
        });
    }
    onClose(callbackFunction) {
        this.callbackFunctions.push(callbackFunction);
    }
}

module.exports = Dialog;

//test.js
const Dialog = require('../dialogCallback');
const { assert } = require('chai');

describe('Dialog', () => {
    it('should allow registering of multiple callbacks', () => {
        const dialog = new Dialog();
        let calledA = 0;
        let calledB = 0;
        let calledC = 0;
        dialog.onClose(() => {
            calledA++;
        });
        dialog.onClose(() => {
            calledB++;
        });
        dialog.onClose(() => {
            calledC++;
        });
        dialog.close();
        assert.equal(calledA, 1, "First Callback was not called once after close");
        assert.equal(calledB, 1, "Second Callback was not called once after close");
        assert.equal(calledC, 1, "Third Callback was not called once after close");
    });
});


//For Each Callback
//forEach.js
function forEach(arr, callback) {
    // for each element in the arr, run the callback, passing in the element
    for(let i=0;i<arr.length;i++){
        callback(arr[i],i);
    }
}

module.exports = forEach;

//test.js
const forEach = require('../forEach');
const { assert } = require('chai');

describe('forEach', () => {
    it('should loop over a function for every element', () => {
        let sum = 0;
        let iterations = 0;
        forEach([1,2,3,4], (n, i) => {
            assert.equal(i, iterations, "index should be supplied for each iteration");
            iterations++;
            sum += n;
        });
        assert.equal(iterations, 4, "Should be a total of four iterations for four elements");
        assert.equal(sum, 10, "Should correctly sum four elements");
    });
});


//Map callback 
//map.js
function map(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callback(arr[i], i);
    }
    return newArr;
}

module.exports = map;

//test.js
const map = require('../map');
const { assert } = require('chai');

describe('map', () => {
    it('should double each element in the returned array', () => {
        const doubled = map([1, 2, 3, 4], (n) => {
            return n * 2;
        });
        assert.sameOrderedMembers([2, 4, 6, 8], doubled);
    });

    it('should triple each element in the returned array', () => {
        const tripled = map([1, 2, 3, 4], (n) => {
            return n * 3;
        });
        assert.sameOrderedMembers([3, 6, 9, 12], tripled);
    });
});
