//summation.js
function summation(n) {
    let sum = 0;
    for (let i=1;i<=n;i++) {
        sum+=i;
    }
    return sum;
}

module.exports = summation;

//test.js
const { assert } = require('chai');
const summation = require('../summation');

describe('summation', () => {
    it('should sum up to 2', () => {
        assert.equal(summation(2), 3);
    });
    it('should sum up to 3', () => {
        assert.equal(summation(3), 6);
    });
    it('should sum up to 4', () => {
        assert.equal(summation(4), 10);
    });
});

//Factorial.js
function factorial(n) {
   let res=1; 
   for(let i=1;i<=n;i++){
       res*=i;

   } 
   return res;
}

module.exports = factorial;

//test.js
const { assert } = require('chai');
const factorial = require('../factorial');

describe('factorial', () => {
    it('should determine factorial of 2', () => {
        if(factorial(2) === undefined) {
            assert(false, "Don't forget to return your result!");
        }
        else {
            assert.equal(factorial(2), 2);
        }
    });
    it('should determine factorial of 3', () => {
        assert.equal(factorial(3), 6);
    });
    it('should determine factorial of 4', () => {
        assert.equal(factorial(4), 24);
    });
    it('should determine factorial of 5', () => {
        assert.equal(factorial(5), 120);
    });
});
