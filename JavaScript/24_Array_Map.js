/*
Map Array :-
:- The map function is stored on the Array.prototype. 
:- This means that every new array we create has access to the method!
:- By passing a function to map, we apply it to every element in the array. 
*/

/*
Ex.:- 
const array = [1, 3, 5];

const result = array.map(function(x) {
    return x * 2;
});

console.log(result); // [2, 6, 10]
*/

//plusOne.js
function plusOne(arr) {
    return arr.map((x)=>x+1);
}

module.exports = plusOne;

//test.js
const plusOne = require('../plusOne');
const {assert} = require('chai');

describe('plus one', () => {
    it('should add one to each element for a single element', () => {
        assert.sameOrderedMembers([1], plusOne([0]));
    });

    it('should add one to each element for several elements', () => {
        assert.sameOrderedMembers([1, 2, 3], plusOne([0, 1, 2]));
    });
});
