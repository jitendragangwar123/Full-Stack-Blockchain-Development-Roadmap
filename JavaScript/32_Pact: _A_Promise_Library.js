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


//Pact.js
const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2,
}

class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.status = STATUS.PENDING;
        this.resolve = (value) => {
            this.resolvedValue = value;
            this.status = STATUS.RESOLVED;
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.rejectedValue = value;
            this.status = STATUS.REJECTED;
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        if (this.status === STATUS.PENDING) {
            this.thenFns.push(_then);
        }
        else if (this.status === STATUS.RESOLVED) {
            _then(this.resolvedValue);
        }
    }
    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFns.push(_catch);
        }
        else if (this.status === STATUS.REJECTED) {
            _catch(this.rejectedValue);
        }
    }
}

module.exports = Pact;

//test.js
const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    describe('immediate resolve', () => {
        let pact;
        before(() => {
            pact = new Pact((resolve, reject) => {
                resolve(42);
            });
        });

        it('should run the then callback even after resolving', (done) => {
            pact.then((val) => {
                assert.equal(val, 42);
                done();
            });
        }).timeout(250);
    });

    describe('immediate catch', () => {
        let pact;
        before(() => {
            pact = new Pact((resolve, reject) => {
                reject(42);
            });
        });

        it('should run the catch callback even after resolution', (done) => {
            pact.catch((val) => {
                assert.equal(val, 42);
                done();
            });
        }).timeout(250);
    });

    describe('asynchronous compatibility (previous tests)', () => {
        it('should call a .then function with the resolve value after a timeout', (done) => {
            let value;
            new Pact((resolve, reject) => {
                setTimeout(() => {
                    resolve(42);
                }, 100);
            }).then((resolved) => {
                assert.equal(resolved, 42);
                done();
            });
        });

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
});


//Chaining Callback
//Pact.js
const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2,
}

class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.status = STATUS.PENDING;
        this.resolve = (value) => {
            this.resolvedValue = value;
            this.status = STATUS.RESOLVED;
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.rejectedValue = value;
            this.status = STATUS.REJECTED;
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        if (this.status === STATUS.PENDING) {
            return new Pact((resolve, reject) => {
                this.thenFns.push((val) => {
                    resolve(_then(val));
                });
            });
        }
        else if (this.status === STATUS.RESOLVED) {
            _then(this.resolvedValue);
        }
    }
    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFns.push(_catch);
        }
        else if (this.status === STATUS.REJECTED) {
            _catch(this.rejectedValue);
        }
    }
}

module.exports = Pact;

//test.js
const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should return a chainable value after .then', () => {
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        }).then((val) => {
            assert.equal(val, 42);
        });
        
        assert(pact, "Expected .then to return a chainable pact!");
        assert.equal(typeof pact.then, "function", "Expected .then to return a chainable pact!");
    });

    it('should handle value transformation', (done) => {
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        }).then((val) => {
            assert.equal(val, 42);
            return val * 2;
        }).then((val) => {
            assert.equal(val, 84);
            return val * 2;
        });

        pact.then((val) => {
            assert.equal(val, 168);
            done();
        });
    });
});

//Chaining Promises
//Pact.js
const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2,
}

class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.status = STATUS.PENDING;
        this.resolve = (value) => {
            this.resolvedValue = value;
            this.status = STATUS.RESOLVED;
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.rejectedValue = value;
            this.status = STATUS.REJECTED;
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        if (this.status === STATUS.PENDING) {
            return new Pact((resolve, reject) => {
                this.thenFns.push((val) => {
                    if (val instanceof Pact) {
                        val.then((val) => resolve(_then(val)));
                    }
                    else {
                        resolve(_then(val));
                    }
                });
            });
        }
        else if (this.status === STATUS.RESOLVED) {
            _then(this.resolvedValue);
        }
    }
    catch(_catch) {
        if (this.status === STATUS.PENDING) {
            this.catchFns.push(_catch);
        }
        else if (this.status === STATUS.REJECTED) {
            _catch(this.rejectedValue);
        }
    }
}

module.exports = Pact;

//test.js
const Pact = require('../Pact');
const { assert } = require('chai');

describe('Pact', function () {
    it('should handle then chaining', (done) => {
        let val1;
        let val2;
        let pact = new Pact((resolve, reject) => {
            setTimeout(() => {
                resolve(42);
            }, 100);
        }).then((val) => {
            assert.equal(val, 42);
            return new Pact((resolve, reject) => {
                resolve(val * 2);
            });
        }).then((val) => {
            assert.equal(val, 84);
            return val * 2;
        });

        pact.then((val) => {
            assert.equal(val, 168);
            done();
        });
    });
});



