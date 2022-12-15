/*
Array Filter:-
        When filtering arrays, we want to come up with some boolean condition (true/false) that will determine if we should keep the element or not.
ex:-
const ones = [1,2,3,1,1].filter((function(el) {
    return (el === 1);
}));

*/

//lessThanFive.js
function lessThanFive(array) {
    return array.filter((x)=>{
        return (x<5);
    });
}

module.exports = lessThanFive;

//test.js
const { assert } = require('chai');
const lessThanFive = require('../lessThanFive');

describe('less than five', () => {
    it('should filter a few elements less than 5', () => {
        const expected = [0, 2, 4];
        const actual = lessThanFive([0, 2, 4, 6, 8]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
    it('should filter several elements less than 5', () => {
        const expected = [1, 2, 3, 4];
        const actual = lessThanFive([1, 2, 3, 4, 5, 6, 7, 8]);
        console.log({expected, actual});
        assert.sameMembers(expected, actual);
    });
});
