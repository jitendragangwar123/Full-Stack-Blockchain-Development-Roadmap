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


/*
Async Await:-
      With these two keywords we can handle promises line-by-line like synchronous code:
Ex:-
async function getData() {
    const result = await serverCall();

    // this will not run until serverCall resolves/rejects
    return result;
}
*/

/*
Catching Async/Await :-
Ex:-
async function getData() {
    try {
        const data = await callServer();
    }
    catch(ex) {
        // this runs if the callServer promise rejects 
        console.log(ex);
    }
}
*/

//handleResults.js
const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId, results);
        await logResponse(response);
    }
    catch(ex) {
        logError(ex);
    }
}

module.exports = handleResults;

//logs.js
const __calls = [];
const __errors = [];

function logResponse(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function logError(...args) {
    __errors.push(args);
}

module.exports = {
    __calls,
    __errors,
    logResponse,
    logError,
};

//messaging.js
const __calls = [];
const __response = { recieved: true };

function sendResults(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        resolve(__response);
    });
}

module.exports = {
    __calls,
    __response,
    sendResults,
};

//labs.js
const __calls = [];
const __results = { negative: true };
const __reset = () => { __calls.length = 0; }
const __error = new Error("Results are not ready");

function getResults(...args) {
    __calls.push(args);
    return new Promise((resolve, reject) => {
        if (args[0] === 1) {
            resolve(__results);
        }
        else {
            reject(__error);
        }
    });
}

module.exports = {
    __calls,
    __reset,
    __results,
    __error,
    getResults,
};

//test.js
const lab = require('../lab');
const messaging = require('../messaging');
const logs = require('../logs');
const handleResults = require('../handleResults');
const { assert } = require('chai');

describe('Lab Results', () => {
    describe('first patient', () => {
        const patientId = 2;
        before(async () => {
            await handleResults(patientId);
        });

        describe('calling the lab', () => {
            it('should make one call', () => {
                assert.equal(lab.__calls.length, 1);
            });
            it('should send one argument', () => {
                assert.equal(lab.__calls[0].length, 1);
            });
            it('should send the patient id', () => {
                assert.equal(lab.__calls[0][0], patientId);
            });
        });

        describe('logging the error', () => {
            it('should make one call', () => {
                assert.equal(logs.__errors.length, 1);
            });
            it('should send one argument', () => {
                assert.equal(logs.__errors[0].length, 1);
            });
            it('should send the error', () => {
                assert.equal(logs.__errors[0][0], lab.__error);
            });
        });
    });

    describe('second patient', () => {
        const patientId = 1;
        before(async () => {
            lab.__reset();
            await handleResults(patientId);
        });

        describe('calling the lab', () => {
            it('should make one call', () => {
                assert.equal(lab.__calls.length, 1);
            });
            it('should send one argument', () => {
                assert.equal(lab.__calls[0].length, 1);
            });
            it('should send the patient id', () => {
                assert.equal(lab.__calls[0][0], patientId);
            });
        });

        describe('sending the results', () => {
            it('should make one call', () => {
                assert.equal(messaging.__calls.length, 1);
            });
            it('should send two arguments', () => {
                assert.equal(messaging.__calls[0].length, 2);
            });
            it('should send the patient id and lab results', () => {
                assert.equal(messaging.__calls[0][0], patientId);
                assert.equal(messaging.__calls[0][1], lab.__results);
            });
        });

        describe('logging the response', () => {
            it('should make one call', () => {
                assert.equal(logs.__calls.length, 1);
            });
            it('should send one argument', () => {
                assert.equal(logs.__calls[0].length, 1);
            });
            it('should send the response', () => {
                assert.equal(logs.__calls[0][0], messaging.__response);
            });
        });
    });
});
