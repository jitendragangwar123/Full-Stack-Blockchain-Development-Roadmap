//String Manipulation
//index.js
function startsWithX(string) {
    if(string[0]==='x'){
        return true;
    }
    else{
        return false;
    }
}

module.exports = startsWithX;

//test.js
const startsWithX = require('../startsWithX');
const { assert } = require('chai');

describe('startsWithX', () => {
    it('should return true for a string starting with x', () => {
        assert.equal(startsWithX("x"), true);
        assert.equal(startsWithX("xpizza"), true);
    });

    it('should return false for a string not starting with x', () => {
        assert.equal(startsWithX("pizza"), false);
        assert.equal(startsWithX("zyx"), false);
    });
});


//index.js
function startsWithX(string) {
    if(string[0]==='x' || string[0]==='X'){
        return true;
    }
    else{
        return false;
    }
}

module.exports = startsWithX;

//test.js
const startsWithX = require('../startsWithX');
const { assert } = require('chai');

describe('startsWithX', () => {
    it('should return true for a string starting with a lower case x', () => {
        assert.equal(startsWithX("xpizza"), true);
        assert.equal(startsWithX("x"), true);
    });

    it('should return true for a string starting with an upper case x', () => {
        assert.equal(startsWithX("Xpizza"), true);
        assert.equal(startsWithX("X"), true);
        assert.equal(startsWithX("Xylophones"), true);
    });

    it('should return false for a string not starting with x', () => {
        assert.equal(startsWithX("pizza"), false);
        assert.equal(startsWithX("spaceX"), false);
    });
});


//index.js
function endsWithX(string) {
    let length=string.length;
    if(string[length-1]==='x' || string[length-1]==='X'){
        return true;
    }
    else{
        return false;
    }
}

module.exports = endsWithX;

//test.js
const endsWithX = require('../endsWithX');
const { assert } = require('chai');

describe('endsWithX', () => {
    it('should return true for a string ending with a lower case x', () => {
        assert.equal(endsWithX("pizzaX"), true);
    });

    it('should return true for a string ending with an upper case x', () => {
        assert.equal(endsWithX("pizzaX"), true);
    });

    it('should return false for a string not ending with x', () => {
        assert.equal(endsWithX("pizza"), false);
    });
});

