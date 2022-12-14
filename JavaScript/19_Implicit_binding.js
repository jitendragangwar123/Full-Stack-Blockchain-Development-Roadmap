/*
const obj = {
    value: 2,
    getValue: function() {
        return this.value;
    }
}

console.log( obj.getValue() ); // 2

:-this is not the obj itself. 
:-It is actually the global this. Without being called directly on the object, this is not bound at all!

const fn = obj.getValue;
console.log( fn() ); // undefined
*/

//index.js
const obj = {
    name: 'Bob',
    getName:function(){
        return this.name;
    }
}

module.exports = obj;

//test.js
const { assert } = require('chai');
const namedObject = require('../namedObject');

describe('getName', () => {
    it('should return the name of the object', () => {
        assert.equal(namedObject.getName(), 'Bob');
    });

    describe('if the name changes', () => {
        before(() => {
            namedObject.name = "Alice";
        });

        it('should also change the name returned by getName', () => {
            assert.equal(namedObject.getName(), 'Alice');
        });
    });
});
