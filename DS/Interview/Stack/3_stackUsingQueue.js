function Stack_1() {
    this.queue1 = [];
    this.queue2 = [];
}

Stack_1.prototype.push = function (value) {
    this.queue1.push(value);
}

Stack_1.prototype.pop = function () {
    if (this.queue1.length === 0) {
        return null;
    }

    // Move all but the last element of queue1 to queue2
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }

    // The last element of queue1 is the top element of the stack
    const top = this.queue1.shift();

    // Swap the queues so that queue2 is empty and queue1 contains all the remaining elements
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return top;
}

Stack_1.prototype.peek = function () {
    if (this.queue1.length === 0) {
        return null;
    }

    // Move all elements of queue1 to queue2
    while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
    }

    // The last element of queue2 is the top element of the stack
    const top = this.queue2[0];

    // Swap the queues so that queue1 contains all the elements again
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    return top;
};

Stack_1.prototype.isEmpty = function () {
    return this.queue1.length === 0;
};

const myStack = new Stack_1();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // Output: 3
console.log(myStack.pop()); // Output: 2

myStack.push(4);

console.log(myStack.peek()); // Output: 4
console.log(myStack.pop()); // Output: 4
console.log(myStack.pop()); // Output: 1

console.log(myStack.isEmpty()); // Output: true