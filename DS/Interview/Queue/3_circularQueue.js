class CircularQueue{
    constructor(size){
        this.queue = new Array(size);
        this.size = size;
        this.head = -1;
        this.tail = -1;
    }

    enqueue(value){
        if(this.isFull()){
            return false;
        }

        if(this.isEmpty()){
            this.head = 0;
        }

        this.tail = (this.tail + 1) % this.size;
        this.queue[this.tail] = value;

        return true;
    }

    dequeue(){
        if(this.isEmpty()){
            return false;
        }

        if(this.head === this.tail){
            this.head = -1;
            this.tail = -1;
            return true;
        }

        this.head = (this.head+1) % this.size;
        return true;
    }

    front(){
        if(this.isEmpty()){
            return -1;
        }
        
        return this.queue[this.head];
    }

    rear(){
        if(this.isEmpty()){
            return -1;
        }

        return this.queue[this.tail];
    }

    isEmpty(){
        return this.head === -1;
    }

    isFull(){
        return ((this.tail+1) % this.size) === this.head;
    }

    print(){
        for (let index = 0; index < this.queue.length; index++) {
            const element = this.queue[index];
            console.log(element);
        }
    }
}

const queue = new CircularQueue(3);
queue.enqueue(1); // returns true
queue.enqueue(2); // returns true
queue.enqueue(3); // returns true
queue.enqueue(4); // returns false, queue is full
queue.dequeue(); // returns 1
queue.enqueue(4); // returns true
queue.print(); // returns [4, 2, 3]