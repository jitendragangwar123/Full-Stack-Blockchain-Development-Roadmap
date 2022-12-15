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


/*
Move Shape :- 
By adding this method to the Shape.prototype object, new instances will be able to access it via the prototype chain.
*/

//Shape.js
// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position={x,y};
}

Shape.prototype.move=function(x,y){
    this.position.x+=x;
    this.position.y+=y;
    
}
module.exports = Shape;

//test.js
const { assert } = require('chai');
const Shape = require('../Shape');

let shape;
let x = 5;
let y = 10;
let moveX = 20;
let moveY = 30;
describe('Shape Instance', () => {
    beforeEach(() => {
        shape = new Shape(x, y);
    });

    it('should set the initial position coordinates', () => {
        assert.equal(shape.position.x, x);
        assert.equal(shape.position.y, y);
    });

    it('should have a function called move', () => {
        assert.equal(typeof shape.move, "function");
    });

    it('should handle a move', () => {
        shape.move(moveX, moveY);
        assert.equal(shape.position.x, x + moveX);
        assert.equal(shape.position.y, y + moveY);
    });
});

//Circle.js
const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this,x,y);
    // store radius on this
    this.radius=radius;
    
}

module.exports = Circle;

//Shape.js
// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position={x,y};
}

Shape.prototype.move=function(x,y){
    this.position.x+=x;
    this.position.y+=y;
    
}
module.exports = Shape;

//test.js
const { assert } = require('chai');
const Circle = require('../Circle');

describe('Circle', () => {
    let circle;
    let x = 10;
    let y = 15;
    let radius = 15;
    describe('instance', () => {
        beforeEach(() => {
            circle = new Circle(x, y, radius);
        });

        it('should set the properties', () => {
            assert.equal(circle.position.x, x);
            assert.equal(circle.position.y, y);
            assert.equal(circle.radius, radius);
        });
    });
}); 

/*
Move Circle :-
        Circle prototype inherits methods from the Shape Prototype! Any new circle will have a move method.
        
        Circle.prototype = Object.create(Shape.prototype);
*/

//Circle.js
const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this,x,y);
    // store radius on this
    this.radius=radius;
    
}

Circle.prototype=Object.create(Shape.prototype);

module.exports = Circle;

//Shape.js
// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position={x,y};
}

Shape.prototype.move=function(x,y){
    this.position.x+=x;
    this.position.y+=y;
    
}
module.exports = Shape;

//test.js
const { assert } = require('chai');
const Circle = require('../Circle');
const Shape = require('../Shape');

describe('Circle', () => {
    let circle;
    let x = 10;
    let y = 15;
    let radius = 15;
    describe('instance', () => {
        beforeEach(() => {
            circle = new Circle(x, y, radius);
        });

        it('should set the properties', () => {
            assert.equal(circle.position.x, x);
            assert.equal(circle.position.y, y);
            assert.equal(circle.radius, radius);
        });

        it('should have a move function', () => {
            assert.equal(typeof circle.move, "function");
        });

        it('should have move the shape', () => {
            circle.move(2, 1);
            assert.equal(circle.position.x, x + 2);
            assert.equal(circle.position.y, y + 1);
        });

        it('should refer to the Shape prototype in the prototype chain', () => {
            assert(Shape.prototype.isPrototypeOf(circle));
        });
    });
}); 
