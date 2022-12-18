/*
Promises:- 
      :-Providing a callback function as an argument is a classic way of handling asynchronous code.
      :-We went over this approach in Callback Functions.
      :-Promises provide an alternative
Ex:-
const promise = getServerData();
// similar to using a callback function argument,
// except we wire up the callback using .then 
promise.then(function(data) {
    // this function is called asynchronously
    // once the server has responded with data
    console.log('got data', data);
});
*/

//Order.js
const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        makeFood(food).then(()=>{
            this.isReady=true;
        });
    }
}

module.exports = Order;

//Kitchen.js
class Task {
    constructor(order) {
        this.order = order;
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}

const _tasks = [];
function _findTaskByOrder(order) {
    return _tasks.find(x => x.order.id === order.id);
}

function makeFood(order) {
    const task = new Task(order);
    _tasks.push(task);
    return task.promise;
}

function problem(order, err) {
    _findTaskByOrder(order).reject(err);
}

function finishFood(order) {
    _findTaskByOrder(order).resolve();
}

module.exports = {
    finishFood,
    makeFood,
    problem,
};

//test.js
const { finishFood } = require('../Kitchen');
const Order = require('../Order');
const { assert } = require('chai');

describe('new order', () => {
    const order = new Order();

    it('should not initially be ready', () => {
        assert.equal(order.isReady, false);
    });

    describe('after calling request', () => {
        const request = { id: 1, burgers: 1 };const timer = require('../timer');
const { assert } = require('chai');

describe('timer', () => {
    const promise = timer();

    it('should return a promise', () => {
        assert.equal(promise instanceof Promise, true);
    });

    it('should resolve', async () => {
        await promise;
        assert(true);
    }).timeout(1000);
});
        before(() => {
            order.request(request);
        });

        it('should still not be ready', () => {
            assert.equal(order.isReady, false);
        });

        describe('after food is done', () => {
            before(() => {
                finishFood(request);
            });

            it('should still be ready', () => {
                assert.equal(order.isReady, true);
            });
        });
    });
});


//Catch Error
//Order.js
const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
        this.error=false;
    }
    request(food) {
        makeFood(food).then(()=>{
            this.isReady=true;
        }).catch((error)=>{
            this.error=error;
        });
    }
}

module.exports = Order;

//Kitchen.js
class Task {
    constructor(order) {
        this.order = order;
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}

const _tasks = [];
function _findTaskByOrder(order) {
    return _tasks.find(x => x.order.id === order.id);
}

function makeFood(order) {
    const task = new Task(order);
    _tasks.push(task);
    return task.promise;
}

function problem(order, err) {
    _findTaskByOrder(order).reject(err);
}

function finishFood(order) {
    _findTaskByOrder(order).resolve();
}

module.exports = {
    finishFood,
    makeFood,
    problem,
};

//test.js
const { finishFood, problem } = require('../Kitchen');
const Order = require('../Order');
const { assert } = require('chai');

describe('failed order', () => {
    let order = new Order();

    it('should not initially be ready', () => {
        assert.equal(order.isReady, false);
    });

    describe('after calling request', () => {
        const request = { id: 1, burgers: 1 } 
        before(() => {
            order.request(request);
        });

        it('should still not be ready', () => {
            assert.equal(order.isReady, false);
        });

        describe('after a problem', () => {
            const err = 'No Burgers Left';
            before(() => {
                problem(request, err);
            });

            it('should have an error', () => {
                assert.equal(order.error, err);
            });
        });
    });
});

describe('successful order', () => {
    const order = new Order();

    it('should not initially be ready', () => {
        assert.equal(order.isReady, false);
    });

    describe('after calling request', () => {
        const request = { id: 2, chicken: 1, fries: 1 } 
        before(() => {
            order.request(request);
        });

        it('should still not be ready', () => {
            assert.equal(order.isReady, false);
        });

        describe('after food is done', () => {
            before(() => {
                finishFood(request);
            });

            it('should still be ready', () => {
                assert.equal(order.isReady, true);
            });
        });
    });
});


/*
Creating a Promise:-
                 Most modern JavaScript environments have a built-in Promise object that can be use to create a new Promise:
 Ex:-
 const promise = new Promise(function(resolve, reject) {
    resolve('resolve successful!');
});
                 
*/

//timer.js
function timer() {
    return new Promise((resolve,reject)=>{
        resolve();
    });
}

module.exports = timer;

//test.js
const timer = require('../timer');
const { assert } = require('chai');

describe('timer', () => {
    const promise = timer();

    it('should return a promise', () => {
        assert.equal(promise instanceof Promise, true);
    });

    it('should resolve', async () => {
        await promise;
        assert(true);
    }).timeout(1000);
});

//Asynchronous Timer
//timer.js
function timer() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },1000);
    });
}

module.exports = timer;

//test.js
const timer = require('../timer');
const { assert } = require('chai');

describe('timer', () => {
    const promise = timer();

    it('should return a promise', () => {
        assert.equal(promise instanceof Promise, true);
    });

    it('should not resolve within 500 milliseconds', (done) => {
        let resolved = false;
        promise.then(() => {
            resolved = true;
        });
        setTimeout(() => {
            assert(!resolved);
            done();
        }, 500);
    });

    it('should resolve within 1500 milliseconds', async () => {
        await promise;
        assert(true);
    }).timeout(1500);
});
