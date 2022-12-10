//index.js
const order = {
    pizzas: 10,
    extraCheese:true,
    deliveryInstructions: "hot",
};

module.exports = order;

//test.js
const order = require('../order');
const { assert } = require('chai');

describe('order', () => {
    it('should have a number of pizzas', () => {
        assert(order.hasOwnProperty('pizzas'), "make sure to add pizzas to the order object!");
        assert.equal(typeof order.pizzas, "number");
        assert.isAbove(order.pizzas, 0);
    });

    it('should have an extraCheese boolean', () => {
        assert(order.hasOwnProperty('extraCheese'), "make sure to add extraCheese to the order object!");
        assert.equal(typeof order.extraCheese, "boolean");
    });

    it('should have a deliveryInstructions string', () => {
        assert(order.hasOwnProperty('deliveryInstructions'), "make sure to add deliveryInstructions to the order object!");
        assert.equal(typeof order.deliveryInstructions, "string");
    });
});

//index.js
function numberOfPizzas(order){
    return order['pizzas'];
}

module.exports = numberOfPizzas;

//test.js
const numberOfPizzas = require('../numberOfPizzas');
const { assert } = require('chai');

describe('order', () => {
    describe('1 pizzas', () => {
        const order = {
            pizzas: 1,
            extraCheese: true,
            deliveryInstructions: "Round the back, please!",
        }

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(order), order.pizzas);
        });
    });

    describe('5 pizzas', () => {
        const order = {
            pizzas: 5,
            extraCheese: false,
            deliveryInstructions: "Call when you arrive",
        }

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(order), order.pizzas);
        });
    });
});

//index.js
function numberOfPizzas(orders) {
    let sum=0;
    for(let i=0;i<orders.length;i++){
        sum+=orders[i].pizzas;
    }
    return sum;
}

module.exports = numberOfPizzas;

//test.js
const numberOfPizzas = require('../numberOfPizzas');
const { assert } = require('chai');

describe('numberOfPizzas', () => {
    describe('a single order', () => {
        const orders = [
            { pizzas: 3 },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 3);
        });
    });

    describe('many orders', () => {
        const orders = [
            { pizzas: 3 },
            { pizzas: 5 },
            { pizzas: 10 },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 18);
        });
    });
});

//index.js
const ORDER_TYPES = {
    PIZZA : 0,
    WINGS : 1,
    SALAD : 3,
    BURGER : 4,
    FRIES : 6,
    SANDWICH :7
}

module.exports = ORDER_TYPES;

//test.js
const { assert } = require('chai');
const ORDER_TYPES = require('../orderTypes');

describe('ORDER_TYPES', () => {
    it('should have at least three keys', () => {
        const keys = Object.keys(ORDER_TYPES);
        assert.isAbove(keys.length, 2);
    });

    it('should have all keys in upper snake case', () => {
        const keys = Object.keys(ORDER_TYPES);
        keys.forEach((key) => {
            assert((new RegExp(/^([A-Z]*_?)*$/)).test(key), 'the key should be in UPPER_SNAKE_CASE');
        });
    });

    it('should have a PIZZA key with a value of 0', () => {
        assert.equal(ORDER_TYPES.PIZZA, 0);
    });

    it('all keys should have numerical values', () => {
        const values = Object.values(ORDER_TYPES);
        values.forEach((value) => {
            assert.equal(typeof value, "number", "make sure each value is a number!");
        });
    });

    it('no key should have the same value', () => {
        const values = Object.values(ORDER_TYPES);
        values.forEach((value, index) => {
            assert(values.indexOf(value) === index, `Each value must be unique, found two ${value} values!`)
        });
    });
});


//orderTypes.js
const ORDER_TYPES = {
    PIZZA : 0,
    WINGS : 1,
    SALAD : 3,
    BURGER : 4,
    FRIES : 6,
    SANDWICH : 7
}

module.exports = ORDER_TYPES;

//numberOfPizzas.js
const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let sum=0;
    for(let i=0;i<orders.length;i++){
        if(orders[i].type===ORDER_TYPES.PIZZA){
            sum+=orders[i].pizzas;
        }
    }
    return sum;
}

module.exports = numberOfPizzas;

//test.js
const numberOfPizzas = require('../numberOfPizzas');
const { assert } = require('chai');
const ORDER_TYPES = require('../orderTypes');

describe('numberOfPizzas', () => {
    describe('just pizza', () => {
        const orders = [
            { pizzas: 3, type: ORDER_TYPES.PIZZA, extraCheese: true },
            { pizzas: 5, type: ORDER_TYPES.PIZZA, extraCheese: false },
            { pizzas: 10, type: ORDER_TYPES.PIZZA, extraCheese: true },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 18);
        });
    });

    const keys = Object.keys(ORDER_TYPES);
    describe(keys.join(', '), () => {
        const orders = keys.reduce((arr, key) => {
            return arr.concat({
                type: key,
            });
        }, [{ pizzas: 3, type: ORDER_TYPES.PIZZA }]);

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 3);
        });
    });
});


/*
const object = { a: 1, b: 2, c: 3 } 
for(let key in object) {
    console.log(key);
}

const object = { a: 1, b: 2, c: 3 } 
console.log( Object.keys(object) ); // ['a', 'b', 'c']
console.log( Object.values(object) ); // [1, 2, 3]
*/

//index.js
function numberOfKeys(object) {
    let keyArray=Object.keys(object);
    return keyArray.length;

}

module.exports = numberOfKeys;

//test.js
const numberOfKeys = require('../numberOfKeys');
const { assert } = require('chai');

describe('numberOfKeys', () => {
    it('should handle an object with 1 property', () => {
        assert.equal(numberOfKeys({ prop: 1 }), 1);
    });

    it('should handle an object with 3 properties', () => {
        assert.equal(numberOfKeys({ a: 1, b: 2, c: 3 }), 3);
    });
});


/*
const person = {
    name: "James",
    age: 22
}

person.name = "Sally";
person["age"] = 30;

console.log( person.name ); // Sally
console.log( person.age ); // 30

const person = { 
    name: "Bob"
}

delete person.name;

console.log( person.name ); // undefined
*/


//index.js
function removeSecret(object) {
    delete object.secret;
}

module.exports = removeSecret;

//test.js
const removeSecret = require('../removeSecret');
const { assert } = require('chai');

describe('removeSecret', () => {
    it('should remove the secret', () => {
        const person = {
            name: "Alice",
            secret: "afraid of the dark"
        }

        removeSecret(person);

        assert.equal(person.name, "Alice");
        assert.equal(person.secret, undefined);
    });
});


/*
Object Reference :- It's an important distinction in JavaScript that objects are passed by reference!

function modify(object) {
    object.message = "Hello World";
}


const store = {
    name: "Seven Eleven" 
}

modify(store);

console.log(store.message); // Hello World
*/
