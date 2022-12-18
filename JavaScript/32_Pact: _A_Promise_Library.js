/*
Pact: A Promise Library :- Creating our own implementation of a Promise called Pact!
Ex:-

var promise = new Promise(function(resolve, reject) {
  // asynchronously resolve a value
  setTimeout(() => {
    resolve(42);
  }, 100);
});

promise.then((value) => {
  console.log(value); // 42
});

:-your Pact will be able to handle asynchronous then, catch and even chaining callbacks like so:-
Ex:-
let pact = new Pact((resolve, reject) => {
  setTimeout(() => {
      resolve(42);
  }, 100);
}).then((val) => {
  console.log(val) // 42;
  return val * 2;
}).then((val) => {
  console.log(val) // 84;
});
*/

/*
:-Then and Catch
:-Executor Function
*/

//Pact.js
class Pact {
    // add methods to return on the instance
    constructor(fun){
        this.resolve=()=>{

        }
        this.reject=()=>{

        }
        fun(this.resolve,this.reject);
    }
    then(){
        
    }
    catch(){

    }
}

module.exports = Pact;

//test.js
const Pact = require('../Pact');
const {assert} = require('chai');

describe('Pact', function () {
    describe('executor function', () => {
        it('should pass two functions', async() => {
            let fn1;
            let fn2;
            new Pact((_fn1, _fn2) => {
                fn1 = _fn1;
                fn2 = _fn2;
            });
            assert.equal(typeof fn1, 'function');
            assert.equal(typeof fn2, 'function');
        });
    });

    describe('then/catch', () => {
        it('should return an object with a then function', async () => {
            assert.equal(typeof (new Pact(() => { })).then, 'function');
        });

        it('should return an object with a catch function', async () => {
            assert.equal(typeof (new Pact(() => { })).catch, 'function');
        });
    });
});

//Pact.js
class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.thenFn(value);
        }
        this.reject = () => {
            
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFn = _then;
    }
    catch() {
        
    }
}

module.exports = Pact;

//test.js
const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should call the .then callback', (done) => {
        new Pact((resolve, reject) => {
            setTimeout(resolve, 100);
        }).then((resolved) => {
            assert(true);
            done();
        });
    });

    it('should call the .then callback with the resolved value', (done) => {
        new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        }).then((resolved) => {
            assert.equal(resolved, 42);
            done();
        });
    });
});
