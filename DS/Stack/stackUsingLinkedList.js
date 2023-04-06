class Node{
    constructor(value){
        this.value = value;
        this.node = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        const poppedNode = this.head;
        this.head = poppedNode.next;
        this.length--;
        return poppedNode;
    }

    peek() {
        if (!this.head) {
            return null;
        }

        return this.head.value;
    }

    isEmpty() {
        return this.length === 0;
    }

    print() {
        const stackItems = [];
        let current = this.head;
        while (current) {
            stackItems.push(current.value);
            current = current.next;
        }

        console.log(stackItems.join('-->'));
    }

    deleteNode(value) {
        let currentNode = this.head;
        let prevNode = null;

        while (currentNode) {
            if (currentNode.value === value) {
                if (!prevNode) {
                    this.top = currentNode.next;
                } else {
                    prevNode.next = currentNode.next;
                }
                this.length--;
                return true;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        return false;
    }

}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log('peek '+stack.peek());
stack.pop()
stack.print();
