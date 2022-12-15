/*
Classes can be defined using the class keyword, followed by its name and curly braces {}.
Inside these curly braces we can define methods. These methods can be custom or a constructor.
The constructor is a special function that is called only once per new instance:
Ex:-
class Hello {
    constructor() {
        console.log('hello!');
    }
}

const h1 = new Hello(); // hello!
const h2 = new Hello(); // hello!

Both h1 and h2 are instances of Hello. When an instance is created, the constructor function is called.
*/

/*
A constructor is a great place to initialize properties on a class instance. 
We can do so by using the this keyword, which is the instance:
Ex:- 
class Team {
    constructor() {
        this.sport = "soccer";
    } 
}

const t1 = new Team();
console.log(t1.sport); // soccer
*/

//Hero.js
class Hero {
    constructor() {
        this.health=50;
    }
}

module.exports = Hero;

//test.js
const { assert } = require('chai');
const Hero = require('../Hero');

describe('new Hero', () => {
    const hero = new Hero();

    it('should have 50 health', () => {
        assert(hero.health, "Did you a health property to the hero instance? (Hint: use `this`)")
        assert.equal(hero.health, 50);
    });
});


/*
Methods:-
        In addition to constructors we can define our own methods on classes:
Ex:- 
class Team {
    constructor() {
        this.wins = 0;
        this.losses = 0;
    }
    changeRecord(isWin) {
        if(isWin) {
            this.wins++;
        }
        else {
            this.losses++;
        }
    }
}
*/

//Hero.js
class Hero {
    constructor() {
        this.health=50;
    }
    takeDamage(damage){
        this.health-=damage;
    }
}

module.exports = Hero;

//test.js
const { assert } = require('chai');
const Hero = require('../Hero');

describe('new Hero', () => {
    const hero = new Hero();

    describe('after taking 5 damage', () => {
        before(() => {
            hero.takeDamage(5);
        });

        it('should have 45 health', () => {
            assert.equal(hero.health, 45);
        });

        describe('after taking 20 more damage', () => {
            before(() => {
                hero.takeDamage(20);
            });

            it('should have 25 health', () => {
                assert.equal(hero.health, 25);
            });
        });
    });
});

