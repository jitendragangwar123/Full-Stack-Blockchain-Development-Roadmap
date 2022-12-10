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
