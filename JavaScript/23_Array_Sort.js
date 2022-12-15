/*
Array Sort:-
     Without a comparison function, the array elements are converted to strings and compared. 
     Lower values are moved to the front of the array.
                    
Ex:-
Sorting with Numbers:-

const result = [20, 1, 2, 3].sort();
console.log(result); // [1, 2, 20, 3]

Sorting with Strings:-

const result = ['orange', 'berry', 'apple', 'cherry'].sort();
console.log(result); // ["apple", "berry", "cherry", "orange"]

*/


/*
Array Ascending Order:-
Ex:-
[3,2,4,1].sort(function comparison(a,b) {
    if(a < b) {
        // take a first
        return -1;
    }
    if(b < a) {
        // take b first
        return 1;
    }
    // no change is needed
    return 0;
});
*/

//sortUp.js
function sortUp(array) {
    // array.sort(function comparison(a,b){
    //     return a-b;
    // });
    array.sort((a,b)=>a-b);
}

module.exports = sortUp;

//test.js
const { assert } = require('chai');
const sortUp = require('../sortUp');

describe('sortUp', () => {
    it('should mantain sort order for sorted elements', () => {
        let actual = [5, 10, 15];
        sortUp(actual);
        const expected = [5, 10, 15];
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted elements', () => {
        let actual = [7, 4, 2, 3, 0, 5];
        sortUp(actual);
        const expected = [0, 2, 3, 4, 5, 7];
        assert.sameOrderedMembers(actual, expected);
    });
});

