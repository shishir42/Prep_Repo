class Queue{
    constructor(){
        this.pushStack = [];
        this.popStack = [];
    }

    enqueue(value){
        this.pushStack.push(value);
    }

    dequeue(){
        if(this.popStack.length === 0){
            while(this.pushStack.length > 0){
                this.popStack.push(this.pushStack.pop());
            }
        }

        return this.popStack.pop();
    }

    peek(){
        if(this.popStack.length === 0){
            while(this.pushStack.length > 0){
                this.popStack.push(this.pushStack.pop());
            }
        }

        return this.popStack[this.popStack.length-1];
    }

    isEmpty(){
        return this.pushStack.length === 0 && this.popStack.length === 0;
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.peek()); // Output: 1
console.log(q.dequeue()); // Output: 1
console.log(q.dequeue()); // Output: 2
console.log(q.isEmpty()); // Output: false
console.log(q.dequeue()); // Output: 3
console.log(q.isEmpty()); // Output: true

// pushStack and popStack are arrays that represent the two stacks used for the queue.
// enqueue(value) adds an element to the end of the push stack.
// dequeue() removes and returns the first element of the pop stack. If the pop stack is empty, it transfers all elements from the push stack to the pop stack before removing the first element.
// peek() returns the first element of the pop stack without removing it. If the pop stack is empty, it transfers all elements from the push stack to the pop stack before returning the first element.
// isEmpty() checks whether both push stack and pop stack are empty.