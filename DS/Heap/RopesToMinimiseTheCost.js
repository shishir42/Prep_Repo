import MinHeap from "/Users/shishirroy/Downloads/A/Question/DS/Heap/minHeap.js";

const minHeap = new MinHeap();

const connectRope = (arr)=>{
    let cost = 0;
    for(let i=0; i<arr.length; i++){
        minHeap.add(arr[i]);
    }

    while (minHeap.size() > 1) {
        let rope1 = minHeap.poll();
        let rope2 = minHeap.poll();
        let newRope = rope1 + rope2;
        cost += newRope;
        minHeap.add(newRope);
      }

      return cost;
}

console.log(connectRope([1, 2, 3, 4, 5]));  //length of rope 


//https://github.com/Zhouzhiling/leetcode/blob/master/Amazon.%20Min%20Cost%20to%20Connect%20Ropes.md
