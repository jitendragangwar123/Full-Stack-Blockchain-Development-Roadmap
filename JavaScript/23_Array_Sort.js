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


//Sorting Descending
//sortDown.js
function sortDown(array) {
    array.sort((a,b)=>b-a);
}

module.exports = sortDown;

//test.js
const { assert } = require('chai');
const sortDown = require('../sortDown');

describe('sortDown', () => {
    it('should mantain sort order for sorted elements', () => {
        let actual = [15, 10, 5];
        sortDown(actual);
        const expected = [15, 10, 5];
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted elements', () => {
        let actual = [7, 4, 2, 3, 0, 5];
        sortDown(actual);
        const expected = [7, 5, 4, 3, 2, 0];
        assert.sameOrderedMembers(actual, expected);
    });
});


/*
Sorting String Ascending Order:-
'a'.localeCompare('a'); // 0
'a'.localeCompare('b'); // -1
"apple".localeCompare("abcd"); // 1
*/

//sortStringsUp:-
function sortStringsUp(array) {
    array.sort((a,b)=>{
        return a.localeCompare(b);
});
}

module.exports = sortStringsUp;

//test.js
const { assert } = require('chai');
const sortStringsUp = require('../sortStringsUp');

describe('sortStringsUp', () => {
    it('should mantain sort order for sorted strings', () => {
        let actual = ['a', 'b', 'c'];
        sortStringsUp(actual);
        const expected = ['a', 'b', 'c'];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted strings', () => {
        let actual = ['berries', 'oranges', 'apples', 'limes', 'lemons'];
        sortStringsUp(actual);
        const expected = ['apples', 'berries', 'lemons', 'limes', 'oranges'];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });
});


/*
Sorting String Descending Order:-

'b'.localeCompare('a');
*/

//sortStringDown.js
function sortStringsDown(array) {
    array.sort((a,b)=>{
        return b.localeCompare(a);
    });   
}

module.exports = sortStringsDown;

//test.js
const { assert } = require('chai');
const sortStringsDown = require('../sortStringsDown');

describe('sortStringsDown', () => {
    it('should mantain sort order for sorted strings', () => {
        let actual = ["c", "b", "a"];
        sortStringsDown(actual);
        const expected = ["c", "b", "a"];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });

    it('should fix sort order for unsorted strings', () => {
        let actual = ['berries', 'oranges', 'apples', 'limes', 'lemons'];
        sortStringsDown(actual);
        const expected = ["oranges", "limes", "lemons", "berries", "apples"];
        console.log({ actual, expected });
        assert.sameOrderedMembers(actual, expected);
    });
});


//sortStudents.js
function sortStudents(students) {
    students.sort((a,b)=>{
        if(a.graduated && !b.graduated){
            return -1;
        }
        if(b.graduated && !a.graduated){
            return 1;
        }
        return b.grade-a.grade;
    });
}

module.exports = sortStudents;

//test.js
const { assert } = require('chai');
const sortStudents = require('../sortStudents');

describe('sortStudents', () => {
    it('should sort graduated student to the top', () => {
        let actual = [
            { id: 1, graduated: false, grade: 100 },
            { id: 2, graduated: true, grade: 90 },
        ];
        sortStudents(actual);
        const expected = [
            { id: 2, graduated: true, grade: 90 },
            { id: 1, graduated: false, grade: 100 },
        ];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });

    it('should sort by grade after sorting by graduated', () => {
        let actual = [
            { id: 1, graduated: false, grade: 90 },
            { id: 2, graduated: true, grade: 90 },
            { id: 3, graduated: true, grade: 95 },
            { id: 4, graduated: false, grade: 87 },
            { id: 5, graduated: true, grade: 70 },
            { id: 6, graduated: false, grade: 88 },
            { id: 7, graduated: true, grade: 85 },
        ];
        sortStudents(actual);
        const expected = [
            { id: 3, graduated: true, grade: 95 },
            { id: 2, graduated: true, grade: 90 },
            { id: 7, graduated: true, grade: 85 },
            { id: 5, graduated: true, grade: 70 },
            { id: 1, graduated: false, grade: 90 },
            { id: 6, graduated: false, grade: 88 },
            { id: 4, graduated: false, grade: 87 },
        ];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });
});


//Sorting By Month
//sortByMonth.js
const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    events.sort((a,b)=>{
    return MONTHS.indexOf(a.month)-MONTHS.indexOf(b.month);

    });
}

module.exports = sortByMonth;

//test.js
const { assert } = require('chai');
const sortByMonth = require('../sortByMonth');

describe('sortByMonth', () => {
    it('should fix the sort order for three events', () => {
        let actual = [
            { event: 'dance', month: 'MAR' },
            { event: 'farmers market', month: 'JUN' },
            { event: 'parade', month: 'JAN' },
        ];
        sortByMonth(actual);
        const expected = [
            { event: 'parade', month: 'JAN' },
            { event: 'dance', month: 'MAR' },
            { event: 'farmers market', month: 'JUN' },
        ];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });

    it('should fix the sort order for many events', () => {
        let actual = [
            { event: 'haunted hayride', month: 'OCT' },
            { event: 'holiday party', month: 'DEC' },
            { event: 'picnic', month: 'SEP' },
            { event: 'dance', month: 'MAR' },
            { event: 'snowball fight', month: 'FEB' },
            { event: 'farmers market', month: 'JUN' },
            { event: 'parade', month: 'JAN' },
        ];
        sortByMonth(actual);
        const expected = [
            { event: 'parade', month: 'JAN' },
            { event: 'snowball fight', month: 'FEB' },
            { event: 'dance', month: 'MAR' },
            { event: 'farmers market', month: 'JUN' },
            { event: 'picnic', month: 'SEP' },
            { event: 'haunted hayride', month: 'OCT' },
            { event: 'holiday party', month: 'DEC' },
        ];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });
});
