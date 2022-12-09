//index.js
const array = [1,2,3]// <-- create an array here!

module.exports = array;

//test.js
const { assert } = require('chai');
const array = require('../array');

describe('array', () => {
    it('should be an array of length 3', () => {
        assert.equal(array.length, 3);
    });

    it('should contain elements 1,2,3', () => {
        assert.sameMembers(array, [1,2,3]);
    });
});

//index.js
function hasOne(array) {
    for(let i=0;i<array.length;i++){
        if(array[i]===1){
            return true;
        }
    }
    return false;
}

module.exports = hasOne;

//test.js
const { assert } = require('chai');
const hasOne = require('../hasOne');

describe('hasOne', () => {
    it('should handle arrays with 1 in it', () => {
        assert(hasOne([1]));
        assert(hasOne([1, 2, 3]));
        assert(hasOne([3, 1, 2]));
        assert(hasOne([3, 2, 1]));
        assert(hasOne([1, 1]));
        assert(hasOne([1, 1, 1]));
    });

    it('should handle arrays without 1 in it', () => {
        assert(!hasOne([]));
        assert(!hasOne([2,3,4]));
        assert(!hasOne([6,7,8,9,10,11]));
    });
});

//index.js
function sumEven(array) {
    let sum=0;
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            sum+=array[i];
        }
    }
    return sum;
    
}

module.exports = sumEven;

//test.js
const { assert } = require('chai');
const sumEven = require('../sumEven');

describe('sumEven', () => {
    it('should handle a single element array', () => {
        assert.equal(sumEven([2]), 2);
    });

    it('should handle an array with a few sequential elements', () => {
        assert.equal(sumEven([1, 2, 3, 4, 5]), 6);
    });

    it('should handle a larger array', () => {
        assert.equal(sumEven([9, 12, 14, 16, 19]), 42);
    });
});

//index.js (Set)
function unique(array) {
    const mySet=new Set(array);
    return [...mySet];
}

module.exports = unique;

//test.js
const { assert } = require('chai');
const unique = require('../unique');

describe('unique', () => {
    it('should return an array with all unique elements', () => {
        assert.sameMembers(unique([1,2,3]), [1,2,3]);
    });

    it('should handle an array with a few duplicates', () => {
        const original = [1, 2, 2, 3, 4, 3];
        assert.sameMembers(unique(original), [1, 2, 3, 4]);
        assert.equal(original.length, 6, "the original array should be unmodified");
    });

    it('should handle a larger array with only duplicates', () => {
        const original = [1, 1, 1, 1, 1, 1, 1];
        assert.sameMembers(unique(original), [1]);
        assert.equal(original.length, 7, "the original array should be unmodified");
    });
});

//index.js
function addOne(array) {
    for(let i=0;i<array.length;i++){
        array[i]=array[i]+1;
    }
}

module.exports = addOne;

//test.js
const { assert } = require('chai');
const addOne = require('../addOne');

describe('addOne', () => {
    it('should handle a single element array', () => {
        const array = [1];
        const returned = addOne(array);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [2]);
    });

    it('should handle an array with a few sequential elements', () => {
        const array = [1, 2, 3];
        const returned = addOne(array);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [2, 3, 4]);
    });

    it('should handle a larger array', () => {
        const array = [9, 12, 14, 16, 19];
        const returned = addOne(array);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [10, 13, 15, 17, 20]);
    });
});

//Remove Occurrences
function removeOccurrences(array, num) {
    for(let i=array.length-1;i>=0;i--){
        if(array[i]===num){
            array.splice(i,1);
        }
    }
}

module.exports = removeOccurrences;

//test.js
const { assert } = require('chai');
const removeOccurrences = require('../remove');

describe('removeOccurrences', () => {
    it('should handle a single removal in an array', () => {
        let array = [1, 2, 3];
        const returned = removeOccurrences(array, 1);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [2, 3]);
    });

    it('should handle removing multiple elements from an array', () => {
        let array = [1, 2, 2, 3, 4, 3];
        const returned = removeOccurrences(array, 2);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, [1, 3, 4, 3]);
    });

    it('should handle removing all elements in an array', () => {
        let array = [1, 1, 1, 1, 1, 1, 1];
        const returned = removeOccurrences(array, 1);
        assert.equal(returned, undefined, "the function should not return anything");
        assert.sameMembers(array, []);
    });
});

