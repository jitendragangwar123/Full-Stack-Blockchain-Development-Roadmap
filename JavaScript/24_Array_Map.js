/*
Map Array :-
:- The map function is stored on the Array.prototype. 
:- This means that every new array we create has access to the method!
:- By passing a function to map, we apply it to every element in the array. 
*/

/*
Ex.:- 
const array = [1, 3, 5];

const result = array.map(function(x) {
    return x * 2;
});

console.log(result); // [2, 6, 10]
*/

//plusOne.js
function plusOne(arr) {
    return arr.map((x)=>x+1);
}

module.exports = plusOne;

//test.js
const plusOne = require('../plusOne');
const {assert} = require('chai');

describe('plus one', () => {
    it('should add one to each element for a single element', () => {
        assert.sameOrderedMembers([1], plusOne([0]));
    });

    it('should add one to each element for several elements', () => {
        assert.sameOrderedMembers([1, 2, 3], plusOne([0, 1, 2]));
    });
});

/*
As well as built-in JavaScript functions:-

const absolutes = [-1, 1, -2, 2].map(Math.abs);
console.log(absolutes); // [1,1,2,2]
*/
//squareRoot.js
function squareRoot(arr) {
    return arr.map((x)=>Math.sqrt(x));
    //retur arr.map(Math.sqrt);
}

module.exports = squareRoot;


//test.js
const squareRoot = require('../squareRoot');
const {assert} = require('chai');

describe('squareRoot', () => {
    it('should take the sqrt for a single element', () => {
        assert.sameOrderedMembers([1], squareRoot([1]));
    });

    it('should take the sqrt for several elements', () => {
        assert.sameOrderedMembers([1, 2, 3, 4], squareRoot([1, 4, 9, 16]));
    });
});


/*
Multiple Arguments Gotcha:-
[10, 20].map((el, i, arr) => {
    console.log(el, i, arr);
});

//10, 0, [10,20]
//20, 1, [10,20]
*/


//squaredMap.js
const squared = require('./squared');

function squaredMap(arr) {
    return arr.map(squared);
}
module.exports = squaredMap;

//squared.js
function squared(n) {
    return n*n;
}
module.exports = squared;

//test.js
/*const squared = require('../squared');
const {assert} = require('chai');

describe('squared', () => {
    it('should square 1', () => {
        assert.equal(squared(1), 1);
    });

    it('should square 2', () => {
        assert.equal(squared(2), 4);
    });

    it('should square 4', () => {
        assert.equal(squared(4), 16);
    });
});
*/
const squaredMap = require('../squaredMap');
const { assert } = require('chai');

describe('squaredMap', () => {
    it('should square a single element', () => {
        assert.sameOrderedMembers(squaredMap([2]), [4]);
    });

    it('should square several elements', () => {
        assert.sameOrderedMembers(squaredMap([2,3,4]), [4,9,16]);
    });
});


/*
Mapping Over Objects :-

Ex:-
const users = [
    { name: 'Corey', loggedIn: true },
    { name: 'Anna', loggedIn: false }
];
const loggedOutUsers = users.map(function(user) {
    return {
        name: user.name,
        loggedIn: false
    }
});
*/

//addScore.js
function addScore(players) {
    return players.map((player)=>{
       player.score+=10;
       return player;
    });
}

module.exports = addScore;

//test.js
const addScore = require('../addScore');
const { assert } = require('chai');

describe('addScore', () => {
    it('should add 10 to the score for a single participant', () => {
        const actual = addScore([{ id: 1, score: 5 }]);
        const expected = [{ id: 1, score: 15 }];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });

    it('should add 10 to the score for several participants', () => {
        const actual = addScore([{ id: 1, score: 5 }, { id: 3, score: 10 }, { id: 2, score: 15 }]);
        const expected = [{ id: 1, score: 15 }, { id: 3, score: 20 }, { id: 2, score: 25 }];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });
});



//addScore.js
function addScore(players) {
    return players.map((player,i)=>{
       if(i<3){ 
        player.score+=10;
       }
       return player;
    });
}

module.exports = addScore;

//test.js
const addScore = require('../addScore');
const { assert } = require('chai');

describe('addScore', () => {
    it('should add 10 to the score for a single participant', () => {
        const actual = addScore([{ id: 1, score: 5 }]);
        const expected = [{ id: 1, score: 15 }];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });

    it('should add 10 to the score for the first 3 participants', () => {
        const actual = addScore([{ id: 1, score: 5 }, { id: 3, score: 10 }, { id: 2, score: 15 }, { id: 0, score: 2 }, { id: 5, score: 4 }]);
        const expected = [{ id: 1, score: 15 }, { id: 3, score: 20 }, { id: 2, score: 25 }, { id: 0, score: 2 }, { id: 5, score: 4 }];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });
});
