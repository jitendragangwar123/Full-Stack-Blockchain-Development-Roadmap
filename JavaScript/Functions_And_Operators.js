// functions 
function getMessage() {
     return "hello";
}

module.exports = getMessage;

//testing 
const getMessage = require('../getMessage');
const {assert} = require('chai');

it('should return a message', () => {
    assert(getMessage(), "it looks like nothing was returned from getMessage")
    assert.equal(typeof getMessage(), "string", "a string should be returned from getMessage");
});
