/*
Array Reduce:-
        In the reduce function, two arguments are provided, an accumulator and the current value. 
        In the case of summing numbers, the accumulator is the sum after each iteration. The current value will be each element in turn.
*/

//sum.js
// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator+currentValue;// <-- sum the numbers here!
    });
}

module.exports = sum;

//test.js
const sum = require('../sum');
const { assert } = require('chai');

describe('sum', function () {
    it('should sum one elements', () => {
        assert.equal(sum([1]), 1);
    });

    it('should sum five elements', () => {
        assert.equal(sum([1,2,3,4,5]), 15);
    });

    it('should sum 10 elements', () => {
        assert.equal(sum([1,2,3,4,5,6,7,8,9,10]), 55);
    });
});


//Largest Value 
//largest.js
// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator>currentValue ? accumulator:currentValue; // <-- determine largest value
    });
}

module.exports = largest;

//test.js
const largest = require('../largest');
const { assert } = require('chai');

describe('largest', function () {
    it('should take the largest of 1 element', () => {
        assert.equal(largest([1]), 1);
    });

    it('should take the largest of 5 elements', () => {
        assert.equal(largest([3,4,1,2,5]), 5);
    });

    it('should take the largest of 10 elements', () => {
        assert.equal(largest([2,8,4,10,1,9,3,5,6,7]), 10);
    });
});


//Largest Positive 
//largest.js
// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator>currentValue ? accumulator:currentValue; 
    },1); //if there are no positive values we will just return 1
}

module.exports = largest;

//test.js
const largest = require('../largest');
const { assert } = require('chai');

describe('largest positive', function () {
    it('should take the largest positive of 1 negative element', () => {
        assert.equal(largest([-3]), 1);
    });

    it('should take the largest positive of 5 non-positive elements', () => {
        assert.equal(largest([-3, -2, -10, -15, 0]), 1);
    });

    it('should take the largest positive of 10 positive and negative elements', () => {
        assert.equal(largest([2, -8, 4, -10, 1, -9, 3, -5, 6, 7]), 7);
    });
});

//Remove Duplicates
//removeDuplicates.js
// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        if(accumulator.indexOf(currentValue)===-1){
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

module.exports = removeDuplicates;

//test.js
const removeDuplicates = require('../removeDuplicates');
const { assert } = require('chai');

describe('removing duplicates', function () {
    it('should handle a single element', () => {
        assert.sameMembers(removeDuplicates([1]), [1]);
    });

    it('should handle an array of five elements with a couple duplicates', () => {
        assert.sameMembers(removeDuplicates([1,1,4,1,5]), [1,4,5]);
    });

    it('should handle a larger array of mostly duplicates', () => {
        assert.sameMembers(removeDuplicates([2,1,2,3,3,1,2,2,3,3,2,1,1,1]), [1,2,3]);
    });
});

//Grouping With Reduce
//group.js
// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        accumulator[currentValue.type]=accumulator[currentValue.type] || [];
        accumulator[currentValue.type].push(currentValue.food);
        return accumulator;
    },{});
}

module.exports = group;

//test.js
const group = require('../group');
const { assert } = require('chai');

describe('group', function () {
    it('should handle grouping one fruit', () => {
        const arr = [{ food: 'apple', type: 'fruit' }];
        const grouped = { fruit: ['apple'] }
        assert.sameMembers(group(arr).fruit, grouped.fruit);
    });

    it('should handle two fruits and a vegetable', () => {
        const arr = [{ food: 'apple', type: 'fruit' }, { food: 'orange', type: 'fruit' }, { food: 'carrot', type: 'vegetable' }];
        const grouped = { fruit: ['orange', 'apple'], vegetable: ['carrot'] }
        assert.sameMembers(group(arr).fruit, grouped.fruit);
        assert.sameMembers(group(arr).vegetable, grouped.vegetable);
    });

    it('should handle fruits, vegetables, dairy and grains', () => {
        const arr = [
            { food: 'carrot', type: 'vegetable' },
            { food: 'apple', type: 'fruit' }, 
            { food: 'cheese', type: 'dairy' }, 
            { food: 'orange', type: 'fruit' },
            { food: 'quinoa', type: 'grain' },
            { food: 'broccoli', type: 'vegetable' },
            { food: 'rice', type: 'grain' },
        ];
        const grouped = { fruit: ['orange', 'apple'], vegetable: ['carrot', 'broccoli'], grain: ['quinoa', 'rice'], dairy: ['cheese'] }
        assert.sameMembers(group(arr).fruit, grouped.fruit);
        assert.sameMembers(group(arr).vegetable, grouped.vegetable);
        assert.sameMembers(group(arr).grain, grouped.grain);
        assert.sameMembers(group(arr).dairy, grouped.dairy);
    });
});

//All Unique Elements
//allUnique.js
// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        if (!accumulator) return false;
        return numbers.indexOf(currentValue) === index;
    }, true);
}

module.exports = allUnique;

//test.js
const allUnique = require('../allUnique');
const { assert } = require('chai');

describe('allUnique', function () {
    it('should handle a single number array', () => {
        assert(allUnique([1], true));
    });

    it('should handle a larger array where it is not all unique', () => {
        const arr = [1,7,3,6,5,1,4,2];
        assert(!allUnique(arr));
    });

    it('should handle a larger array where it is all unique', () => {
        const arr = [2,3,7,5,4,6,1];
        assert(allUnique(arr));
    });
});

