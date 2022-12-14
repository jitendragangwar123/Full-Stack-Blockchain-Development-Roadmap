/*
Binding this:-
You can bind arguments to a function to create partially applied functions.
ex:-
function add(x, y) {
    return x + y;
}

we can bind an argument to add to create a new type of function:-

const addTwo = add.bind(null, 2);

console.log( addTwo(2) ); // 4
console.log( addTwo(10) ); // 12
*/

/*
:-bind does not change the nature of the original function.
:-It creates a new function that is bound with the provided this.

function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Ted' }); 

console.log(newFunction()); // Ted
console.log(thisName()); // undefined
*/

/*
:-Once a function is bound, the binding cannot be overwritten.

const newFunction2 = newFunction.bind({ name: 'Walt' });

console.log(newFunction2()); // Ted
*/

//index.js
function thisName() {
    return this.name;
}

module.exports = thisName.bind({ name: "Bob" });;

//test.js
const { assert } = require('chai');
const thisName = require('../thisName');

describe('thisName', () => {
    it('should be bound to an object with the name Bob', () => {
        assert.equal(thisName(), 'Bob');
    });

    it('should have renamed the function bound thisName', () => {
        assert.equal(thisName.name, "bound thisName");
    });
});
