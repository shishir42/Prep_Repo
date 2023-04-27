class MovingAverage{
    constructor(size){
        this.size = size;
        this.queue = [];
    }

    next(val){
        this.queue.push(val);

        if(this.queue.length > this.size){
            this.queue.shift();
        }

        let sum=0;
        for(let i=0; i< this.queue.length; i++){
            sum +=this.queue[i];
        }

        return sum/this.queue.length;
    }
}

const mv = new MovingAverage(3);
console.log(mv.next(1)); // Output: 1
console.log(mv.next(10)); // Output: 5.5
console.log(mv.next(3)); // Output: 4.666666666666667
console.log(mv.next(5)); // Output: 6