/*
Linked List Node:-
          Each node keeps a reference to the next node. If there is no next node, the value is null.
Ex:-         
const node = new Node(4);
console.log(node.data); // 
console.log(node.next); // null
*/

//Node.js
class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

module.exports = Node;

//test.js
const Node = require('../Node');
const { assert } = require('chai');

describe('node', () => {
    const data = 3;
    const node = new Node(data);

    it('should store data', () => {
        assert.equal(node.data, 3);
    });

    it('should have a null next', () => {
        assert.strictEqual(node.next, null);
    });
});

/*
Linkedlist:-
          We need to keep track of a head. This is the first node in the linked list.
The head will keep a reference to the next node which will keep a reference to its next node… and so on until the end of the list.

Ex:-
const linkedList = new LinkedList();
console.log(linkedList.head); // null
*/

//LinkedList.js
class LinkedList {
    constructor(){
        this.head=null;
    }
}

module.exports = LinkedList;

//Node.js
class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

module.exports = Node;

//test.js
const LinkedList = require('../LinkedList');
const Node = require('../Node');
const { assert } = require('chai');

describe('LinkedList instance', () => {
    const list = new LinkedList();

    it('should start with a null head', () => {
        assert.strictEqual(list.head, null);
    });
});
