//Shortest String 
function shortestString(str1, str2) {
    if(str1.length<str2.length){
        return str1;
    }
    else{
        return str2;
    }
}
module.exports = shortestString;

//test.js
const { assert } = require('chai');
const shortestString = require('../shortestString');

describe('shortestString', () => {
    it('should return the shorter string', () => {
        assert.equal(shortestString('elephant', 'mouse'), 'mouse');
    });

    it('should return the shorter string', () => {
        assert.equal(shortestString('lion', 'gazelle'), 'lion');
    });
})


//index.js
function halfValue(numbers) {
    let newArray=[];
    for(let i=0;i<numbers.length;i++){
        newArray[i]=Math.round(numbers[i]/2);
    }
    return newArray;
}

module.exports = halfValue;

//test.js
const {assert} = require('chai');
const halfValue = require("../halfValue");

const modifyErr = "Whoops! Create a new array, do not modify the original array.";
const compare = (a,b) => JSON.stringify(a) === JSON.stringify(b);

describe('halfValue', () => {
    it('should return an empty array', () => {
        const arr = [];
        const actual = halfValue(arr);
        assert(compare(arr, []), modifyErr);
        assert.sameMembers(actual, []);
    });

    it('should return an array of even value', () => {
        const arr = [2, 4, 6, 8];
        const actual = halfValue(arr);
        assert(compare(arr, [2, 4, 6, 8]), modifyErr);
        assert.sameOrderedMembers(actual, [1, 2, 3, 4]);
    });

    it('should return an array of odd values', () => {
        const arr = [11, 13, 15, 17];
        const actual = halfValue(arr);
        assert(compare(arr, [11, 13, 15, 17]), modifyErr);
        assert.sameOrderedMembers(actual, [6, 7, 8, 9]);
    });
})


//CountC.js
function countC(str) {
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='c' || str[i]==='C'){
            count++;
        }
    }
    return count;
}

module.exports = countC;

//test.js
const { assert } = require('chai');
const countC = require('../countC');

describe('countC', () => {
    it('should return zero', () => {
        assert.equal(countC('pizza'), 0);
    });

    it('should handle lowercase c', () => {
        assert.equal(countC('character'), 2);
    });

    it('should handle uppercase c', () => {
        assert.equal(countC('Circus'), 2);
    });
})

//countVowels.js
const Vowels=['a','e','i','o','u'];
function countVowels(str) {
    let count=0;
    for(let i=0;i<str.length;i++){
        if(Vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

module.exports = countVowels;

//test.js
const { assert } = require('chai');
const countVowels = require('../countVowels');

describe('countVowels', () => {
    it('should return zero', () => {
        assert.equal(countVowels('bczx'), 0);
    });

    it('should count all vowels', () => {
        assert.equal(countVowels("Igloo"), 3)
    })

    describe('uppercase vowels', () => {
        it('should count all uppercase vowels', () => {
            assert.equal(countVowels('AEIOU'), 5);
        });

        it('should only count vowels', () => {
            assert.equal(countVowels('APPLE'), 2);
        });
    })
    

    describe('lowercase vowels', () => {
        it('should count all lowercase vowels', () => {
            assert.equal(countVowels('aeiou'), 5);
        });

        it('should only count vowels', () => {
            assert.equal(countVowels('apple'), 2);
        });
    })
})

//Reverse a String
function reverse(string) {
    let revString="";
    for(let i=string.length-1;i>=0;i--){
        revString+=string[i];
    }
    return revString;
}

module.exports = reverse;

//test.js
const { assert } = require('chai');
const reverse = require('../reverse');

describe('reverse', () => {
    it('should return an empty string', () => {
        assert.equal(reverse(""), "");
    });

    it('should reverse a short string', () => {
        assert.equal(reverse('cat'), 'tac');
    });

    it('should reverse a long string', () => {
        assert.equal(reverse('macintosh'), 'hsotnicam');
    });
})


