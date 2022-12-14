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

//scream.js
function scream(n) {
    let str="";
    for(let i=0;i<n;i++){
        str+="a";
    }
    return str;
}

module.exports = scream;

//test.js
const { assert } = require('chai');
const scream = require('../scream');

describe('scream', () => {
    it('should do a scream of length 1', () => {
        assert.equal(scream(1), "a");
    });
    it('should do a scream of length 5', () => {
        assert.equal(scream(5), "aaaaa");
    });
    it('should do a scream of length 10', () => {
        assert.equal(scream(10), "aaaaaaaaaa");
    });
});

//scream.js
function scream(n) {
    let str="";
    for(let i=0;i<n;i++){
        if(i%2===0){
            str += "a";
        }
        else{
            str += "A";
        }
    }
    return str;
}

module.exports = scream;

//test.js
const { assert } = require('chai');
const scream = require('../scream');

describe('scream', () => {
    it('should do a scream of length 1', () => {
        assert.equal(scream(1), "a");
    });
    it('should do a scream of length 5', () => {
        assert.equal(scream(5), "aAaAa");
    });
    it('should do a scream of length 10', () => {
        assert.equal(scream(10), "aAaAaAaAaA");
    });
});


//toDouble.js
function topDouble(value, top) {
    while (value < top) {
        value *= 2;
    }
    return value / 2;
  
}

module.exports = topDouble;

//test.js
const { assert } = require('chai');
const topDouble = require('../topDouble');

describe('topDouble', () => {
    it('should determine the top double of 1 less than 5', () => {
        assert.equal(topDouble(1, 5), 4);
    });

    it('should determine the top double of 2 less than 100', () => {
        assert.equal(topDouble(2, 100), 64);
    });

    it('should determine the top double of 5 less than 100', () => {
        assert.equal(topDouble(5, 100), 80);
    });
});
