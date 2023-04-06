class Queue {
    constructor() {
        this.items = [];
    }

    //add an element to queue
    enqueue(element) {
        this.items.push(element);
    }

    //remove the element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "underflow"
        }

        return this.items.shift();
    }

    // Returns the front element of the queue
    front() {
        if (this.isEmpty()) {
            return "no element in queue";
        }

        return this.items[0];
    }

    // Returns true if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    //print all the element in the queue
    printQueue(){
        let str = "";
        for(let i = 0; i< this.items.length; i++){
            str += this.items[i] + " ";
        }

        console.log(str);
        return str;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue(); // Output: 10 20 30
queue.dequeue();
queue.printQueue(); // Output: 20 30
console.log(queue.front()); // Output: 20
console.log(queue.isEmpty()); // Output: false