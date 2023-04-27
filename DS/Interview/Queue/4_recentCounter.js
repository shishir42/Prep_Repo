// Number of Recent Calls: Write a RecentCounter class to count recent requests, where requests are represented by a timestamp (in milliseconds) and the RecentCounter returns the count of requests in the last 3000 milliseconds

class RecentCounter{
    constructor(){
        this.request = [];
    }

    ping(t){
        this.request.push(t);
        while(this.request[0] < t - 3000){
            this.request.shift();
        }

        return this.request.length;
    }
}

const rc = new RecentCounter();
console.log(rc.ping(1)); // Output: 1
console.log(rc.ping(100)); // Output: 2
console.log(rc.ping(3001)); // Output: 1
console.log(rc.ping(3002)); // Output: 2
console.log(rc.ping(6000)); // Output: 1