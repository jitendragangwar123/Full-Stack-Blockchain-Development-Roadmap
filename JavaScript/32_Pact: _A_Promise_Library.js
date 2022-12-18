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

//Catch the rejection
//Pact.js
class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.thenFn(value);
        }
        this.reject = (value) => {
            this.catchFn(value);
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFn = _then;
    }
    catch(_catch) {
        this.catchFn = _catch;
    }
}

module.exports = Pact;

//test.js
// const Pact = require('../Pact');
// const { assert } = require('chai');

// describe('Pact', function () {
//     it('should call the .then callback', (done) => {
//         new Pact((resolve, reject) => {
//             setTimeout(resolve, 100);
//         }).then((resolved) => {
//             assert(true);
//             done();
//         });
//     });

//     it('should call the .then callback with the resolved value', (done) => {
//         new Pact((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(42);
//             }, 100);
//         }).then((resolved) => {
//             assert.equal(resolved, 42);
//             done();
//         });
//     });
// });

const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should call a .catch function with the reject value after a timeout', (done) => {
        let value;
        new Pact((resolve, reject) => {
            setTimeout(() => {
                reject(42);
            }, 100);
        }).catch((err) => {
            assert.equal(err, 42);
            done();
        });
    });
});


//Multiple Callbacks
//Pact.js
class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.resolve = (value) => {
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFns.push(_then);
    }
    catch(_catch) {
        this.catchFns.push(_catch);
    }
}

module.exports = Pact;

//test.js
const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should run both .then callbacks', (done) => {
        let val1;
        let val2;
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        });
        pact.then((val) => {
            val1 = val;
        });
        pact.then((val) => {
            val2 = val;
        });
        setTimeout(() => {
            assert.equal(val1, 42, "First then callback did not succeed");
            assert.equal(val2, 42, "Second then callback did not suceeed");
            done();
        }, 150)
    });

    it('should run both .catch callbacks', (done) => {
        let val1;
        let val2;
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                reject(42);
            }, 100);
        });
        pact.catch((val) => {
            val1 = val;
        });
        pact.catch((val) => {
            val2 = val;
        });
        setTimeout(() => {
            assert.equal(val1, 42, "First catch callback did not succeed");
            assert.equal(val2, 42, "Second catch callback did not suceeed");
            done();
        }, 150)
    });
});



