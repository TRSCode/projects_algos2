// Create Node and SLL classes
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class SLL {
    constructor() {
        this.head = null;
    }
    
    // --------------------------------------1--------------------------------------
    addFront(data) {
        let newNode = new Node(data);
        if (this.head !== null) {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this.head;
    }
    // --------------------------------------2--------------------------------------
    removeFront() {
        if(this.head === null) {
            return null;
        }
        let nodeToRemove = this.head;
        this.head = this.head.next;
        nodeToRemove.next = null;
        return this.head;
    }
    // --------------------------------------3--------------------------------------
    front() {
        if(this.head === null) {
            return null;
        }
        return this.head.data;
    }
}




let SLL1 = new SLL();
// --------------------------------------1--------------------------------------
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));
// --------------------------------------2--------------------------------------
console.log(SLL1.removeFront());
console.log(SLL1.removeFront());
// --------------------------------------3--------------------------------------
console.log(SLL1.front());
console.log(SLL1.removeFront());
console.log(SLL1.front());