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


/*
Add First Node:-
Ex:-
const linkedList = new LinkedList();

linkedList.addFirst( new Node(1) );

console.log(linkedList.head.data); // 1

linkedList.addFirst( new Node(2) );

console.log(linkedList.head.data); // 2
console.log(linkedList.head.next.data); // 1
*/

//LinkedList.js
class LinkedList {
    constructor(){
        this.head=null;
    }

    addFirst(node){
        node.next=this.head;
        this.head=node;
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

    it('should have a null head', () => {
        assert.strictEqual(list.head, null);
    });

    describe('after adding a new node', () => {
        const node1 = new Node(1);
        before(() => {
            list.addFirst(node1);
        });

        it('should set the head to the new node', () => {
            assert.equal(list.head, node1);
        });

        describe('after adding another node', () => {
            const node2 = new Node(2);
            before(() => {
                list.addFirst(node2);
            });

            it('should set the head to the new node', () => {
                assert.equal(list.head, node2);
            });

            it('should set the next on the new head', () => {
                assert.equal(node2.next, node1);
            });
        });
    });
}); 


/*
Add Last Node:-
*/

//LinkedList.js
class LinkedList {
    constructor(){
        this.head=null;
    }

    addFirst(node){
        node.next=this.head;
        this.head=node;
    }

    addLast(node){
        if(!this.head){
            this.head=node;
            return;
        }

        let ref=this.head;
        while(ref.next){
            ref=ref.next;
        }
        ref.next=node;
        
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

    describe('after adding a new node last', () => {
        const node1 = new Node(1);
        before(() => {
            list.addLast(node1);
        });

        it('should set the head to the new node', () => {
            assert.equal(list.head, node1);
        });

        describe('after adding another node first', () => {
            const node2 = new Node(2);
            before(() => {
                list.addFirst(node2);
            });

            it('should set the head to the new node', () => {
                assert.equal(list.head, node2);
            });

            it('should set the next on the new head', () => {
                assert.equal(node2.next, node1);
            });

            describe('after adding another node last', () => {
                const node3 = new Node(3);
                before(() => {
                    list.addLast(node3);
                });

                it('should keep the head as the previous node', () => {
                    assert.equal(list.head, node2);
                });

                it('should set this node after the middle node', () => {
                    assert.equal(node1.next, node3);
                });

                it('should set this node to the end', () => {
                    assert.equal(node3.next, null);
                });
            });
        });
    });
});


/*indexOf :-
const node1 = new Node(4);
const node2 = new Node(3);
const linkedList = new LinkedList();

linkedList.addLast(node1); // node1 
linkedList.addLast(node2); // node1 --> node2

console.log(linkedList.indexOf(node1)); // 0
console.log(linkedList.indexOf(node2)); // 1
*/

//LinkedList.js
class LinkedList {
    constructor(){
        this.head=null;
    }

    addFirst(node){
        node.next=this.head;
        this.head=node;
    }

    addLast(node){
        if(!this.head){
            this.head=node;
            return;
        }

        let ref=this.head;
        while(ref.next){
            ref=ref.next;
        }
        ref.next=node;
    }

    indexOf(node){
        let idx=0;
        let ptr=this.head;
        do{
            if(ptr===node){
                return idx;
            }
            ptr=ptr.next;
            idx++;
        }
        while(ptr)
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

    describe('after adding a new node last', () => {
        const node1 = new Node(1);
        before(() => {
            list.addLast(node1);
        });

        it('should set the head to the new node', () => {
            assert.equal(list.head, node1);
        });

        it('should find the index at 0', () => {
            assert.equal(list.indexOf(node1), 0)
        });

        describe('after adding another node first', () => {
            const node2 = new Node(2);
            before(() => {
                list.addFirst(node2);
            });

            it('should set the head to the new node', () => {
                assert.equal(list.head, node2);
            });

            it('should set the next on the new head', () => {
                assert.equal(node2.next, node1);
            });

            it('should find the index at 0', () => {
                assert.equal(list.indexOf(node2), 0)
            });

            it('should find the first node at index 1', () => {
                assert.equal(list.indexOf(node1), 1)
            });

            describe('after adding another node last', () => {
                const node3 = new Node(3);
                before(() => {
                    list.addLast(node3);
                });

                it('should keep the head as the previous node', () => {
                    assert.equal(list.head, node2);
                });

                it('should set this node to the end', () => {
                    assert.equal(list.head.next.next, node3);
                });

                it('should find the index at 2', () => {
                    assert.equal(list.indexOf(node3), 2)
                });
            });
        });
    });
}); 
