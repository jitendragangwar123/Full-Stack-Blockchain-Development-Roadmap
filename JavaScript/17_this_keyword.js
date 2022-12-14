/*

function sum() {
    return this.a + this.b;
}

//call the function:-
const result = sum.call({ a: 2, b: 4 });
console.log(result); // 6 
*/

/*
Call Versus Apply :- 
Call and Apply are very similar methods. 
They both exist on every JavaScript function and they both allow you to set the context this.
The difference comes when you want to pass arguments to the function:-
Ex:-
function totalThings(a, b, c) {
    return `There are ${a + b + c} ${this}`;
}

using this:-
totalThings.call("Students", 10, 3, 2);
using apply:-
totalThings.apply("Students", [10, 3, 2]);
*/

//index.js
function thisName() {
    return this.name;
}

module.exports = thisName;

//test.js
const { assert } = require('chai');
const thisName = require('../thisName');

describe('thisName', () => {
    it('should throw an error when called directly', () => {
        let error;
        try { 
            this.name();
        }
        catch(ex) {
            error = ex;
        }
        assert(error, "When called directly, this should not be defined");
    });
    
    it('should return a name when it is called bound to an object', () => {
        assert.equal(thisName.call({ name: 'Bob' }), 'Bob');
    });
});
