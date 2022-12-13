/*
Destructuring :-
With destructuring we can "unpack" an object and assign its properties to new variables.
*/
const obj = {
  a: 2,
  b: 3,
}

// destructure assignment
const { a, b } = obj;

console.log(a); // 2
console.log(b); // 3
/*
We are destructuring the obj here to assign the values of its properties a and b to variables with the corresponding names. 
The values are assigned to the variables with the same name as the property. 
If we tried to destructure with a variable named c, it would be undefined.
*/

//We can also destructure arrays:-
const arr = ["hello", "world"];

const [a, b] = arr;

console.log(a); // hello
console.log(b); // world

/*
Rest :- "grab me the rest of the values".
The rest parameters syntax can assign function arguments as an array.
*/
function log(...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

//You can also grab the rest of the parameters:-
function log(a, b, ...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [3, 4, 5]

//This syntax can also be used in destructuring:-
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(others); // [3, 4, 5]

/*
Spread Arguments:- "Spread these values out".

*/
const numbers = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

const sum = add(...numbers);

console.log(sum); // 6
