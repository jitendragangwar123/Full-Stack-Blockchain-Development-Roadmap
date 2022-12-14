/*
Unbound Function:-  it is often helpful to define functions inside of other functions. 
In these cases, keeping track of the bound context can be quite tricky!

Ex:-
const YEAR = (1000 * 60 * 60 * 24 * 365);
function addYear() {
    setTimeout(function() {
        this.age++;
    }, YEAR);
}

const person = { name: 'Fred', age: 29 }
addYear.call(person); // TypeError


Solution:- 

1. Closure :- This defines that which captures the context this within the addYear scope. Then we use that to increment age.

function addYear() {
    const that = this;
    setTimeout(function() {
        that.age++;
    }, YEAR);
}

2. Bind the Function :- We use .bind to create a new function from the one we pass to setTimeout. 
This new function is bound to the same context as the addYear function itself.

function addYear() {
    setTimeout(function() {
        this.age++;
    }.bind(this), 1);
}


3. Arrow Syntax :- 

function addYear() {
    setTimeout(() => {
        this.age++;
    }, YEAR);
}
*/

//celebrity.js
const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, (age) {
        this.age = age;
    });
}

module.exports = Celebrity;

//fetchAge.js
const celebrities = {
    'Will Smith': 51,
    'Matt Damon': 49,
}

function fetchAge(name, cb) {
    cb(celebrities[name]);
}

module.exports = fetchAge;

//test.js
const { assert } = require('chai');
const Celebrity = require('../Celebrity');

describe('Celebrity', () => {
    describe('Will Smith', () => {
        const celebrity = new Celebrity("Will Smith");

        it('should set their name', () => {
            assert.equal(celebrity.name, "Will Smith");
        });

        it('should set their age', () => {
            assert.equal(celebrity.age, 51);
        });
    });

    describe('Matt Damon', () => {
        const celebrity = new Celebrity("Matt Damon");

        it('should set their name', () => {
            assert.equal(celebrity.name, "Matt Damon");
        });

        it('should set their age', () => {
            assert.equal(celebrity.age, 49);
        });
    });
});
