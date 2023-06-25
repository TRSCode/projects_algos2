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

    addFront(data) {
        let newNode = new Node(data);
        if(this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this;
    }

    display() {
        if (!this.head) {
            return "List is empty";
        }

        let runner = this.head;
        let displayString = '';

        while(runner) {
            displayString += runner.data;
            if(runner.next) {
                displayString += ", ";
            }
            runner = runner.next;
        }

        return displayString;
    }
}

let SLL1 = new SLL();
console.log(SLL1.addFront(76)); 
console.log(SLL1.addFront(2)); 
console.log(SLL1.display()); 
console.log(SLL1.addFront(11.41)); 
console.log(SLL1.display()); 
