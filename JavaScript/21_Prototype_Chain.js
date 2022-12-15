/*
Prototype Chain:- 
JavaScript does not have classes in a traditional sense. It has prototypes. 
They function similarily with a few key differences! Primarily, prototypes 
provide a way to share properties and functions by linking objects together.
*/

/*
function Animal(name) {
    this.name = name;
}

const animal = new Animal("Bud");

const animal = new Animal("Bud");
const animal2 = new Animal("Lassie");

console.log(animal.hasOwnProperty === animal2.hasOwnProperty); // true
*/

/*
function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

console.log(car.make) // Toyota
console.log(car2.model) // Civic
*/

//Using the new operator we can create new instances of Car.
//The new operator will create a new object and set it to this within the Car function in the example above.

//index.js
// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position={x,y};
}

module.exports = Shape;

//test.js
const { assert } = require('chai');
const Shape = require('../Shape');

describe('Shape', () => {
    it('should be a function', () => {
        assert.equal(typeof Shape, 'function');
    });

    let shape;
    let x = 10;
    let y = 15;
    describe('instance', () => {
        beforeEach(() => {
            shape = new Shape(x, y);
        });

        it('should have a position property associated to an object', () => {
            assert(shape.position, "could not find property position on the shape instance");
            assert.equal(typeof shape.position, "object");
        });

        it('should set the position coordinates', () => {
            assert.equal(shape.position.x, x);
            assert.equal(shape.position.y, y);
        });
    });
}); 
