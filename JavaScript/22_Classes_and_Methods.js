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


/*
Subclasses :-
           It is possible to create subclasses that extend or inherit behavior from their parent class.
Ex:-
class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    
}
const rect = new Rectangle();

console.log(rect.position.x); // 0
console.log(rect.position.y); // 0
*/

/*
New Keyword: Super 
                The use of the keyword super. When invoked, this calls the constructor on Shape.
                Subclasses must call super before accessing this inside the constructor or JavaScript will throw a reference error.

Ex:-
class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.height = 10;
        this.width = 5;
    }
}

const rectangle = new Rectangle();

console.log(rectangle.position.x); // 0
console.log(rectangle.height); // 10
console.log(rectangle.width); // 5
*/

//Warrior.js
const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(){
        super();
        this.rage=0;
    }
}

module.exports = Warrior;

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
const Warrior = require('../Warrior');
const Hero = require('../Hero');

describe('new Warrior', () => {
    const warrior = new Warrior();

    it('should have 50 health', () => {
        assert.equal(warrior.health, 50);
    });

    it('should be a hero', () => {
        assert(warrior instanceof Hero);
    });

    it('should have 0 rage', () => {
        assert.equal(warrior.rage, 0);
    });
});

describe('new Hero', () => {
    const hero = new Hero();

    it('should have 50 health', () => {
        assert.equal(hero.health, 50);
    });

    it('should not have rage', () => {
        assert.equal(hero.rage, undefined);
    });
});


/*
Calling Super Methods :-
                    inheritance uses parent/child metaphors. 
                    The class that has been extended is called the parent, while the class extending it is called the child.
 */

//Warrior.js
const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(){
        super();
        this.rage=0;
    }

    takeDamage(damage){
        super.takeDamage(damage);
        this.rage+=1;
    }
}

module.exports = Warrior;

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
const Warrior = require('../Warrior');
const Hero = require('../Hero');

describe('new Warrior', () => {
    const warrior = new Warrior();

    it('should have 50 health', () => {
        assert.equal(warrior.health, 50);
    });

    it('should be a hero', () => {
        assert(warrior instanceof Hero);
    });

    it('should have 0 rage', () => {
        assert.equal(warrior.rage, 0);
    });

    describe('after taking 5 damage', () => {
        before(() => {
            warrior.takeDamage(5);
        });

        it('should have 45 health', () => {
            assert.equal(warrior.health, 45);
        });

        it('should have 1 rage', () => {
            assert.equal(warrior.rage, 1);
        });

        describe('after taking 15 more damage', () => {
            before(() => {
                warrior.takeDamage(15);
            });

            it('should have 30 health', () => {
                assert.equal(warrior.health, 30);
            });

            it('should have 2 rage', () => {
                assert.equal(warrior.rage, 2);
            });
        });
    });
});

describe('new Hero', () => {
    const hero = new Hero();

    it('should have 50 health', () => {
        assert.equal(hero.health, 50);
    });

    it('should not have rage', () => {
        assert.equal(hero.rage, undefined);
    });
});

//Passing parameter in the constructor

//Warrior.js
const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(health){
        super(health);
        this.rage=0;
    }

    takeDamage(damage){
        super.takeDamage(damage);
        this.rage+=1;
    }
}

module.exports = Warrior;

//Hero.js
class Hero {
    constructor(health) {
        this.health=health;
    }
    takeDamage(damage){
        this.health-=damage;
    }
}

module.exports = Hero;

//test.js
const { assert } = require('chai');
const Warrior = require('../Warrior');
const Hero = require('../Hero');

describe('new Warrior', () => {
    const health = 25;
    const warrior = new Warrior(health);

    it(`should have ${health} health`, () => {
        assert.equal(warrior.health, health);
    });

    it('should be a hero', () => {
        assert(warrior instanceof Hero);
    });
});

describe('new Hero', () => {
    const health = 10;
    const hero = new Hero(health);

    it(`should have ${health} health`, () => {
        assert.equal(hero.health, health);
    });
});
