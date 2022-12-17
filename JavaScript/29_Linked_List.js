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
