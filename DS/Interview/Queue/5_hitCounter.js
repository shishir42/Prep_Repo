class HitCounter{
    constructor(){
        this.hits = [];
    }

    hit(timestamp){
        this.hits.push(timestamp);
    }

    getHits(timestamp){
        // Remove all hits that are older than 5 minutes
        while (this.hits.length > 0 && timestamp - this.hits[0] >= 300000) {
            this.hits.shift();
          }

        return this.hits.length;
    }

}

const hitCounter = new HitCounter();

hitCounter.hit(1);
hitCounter.hit(2);
hitCounter.hit(3);
console.log(hitCounter.getHits(4)); // output: 3

hitCounter.hit(300);
console.log(hitCounter.getHits(300)); // output: 4

hitCounter.hit(301);
console.log(hitCounter.getHits(301)); // output: 3