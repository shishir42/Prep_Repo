import MinHeap from "/Users/shishirroy/Downloads/A/Question/DS/Heap/minHeap.js";

const minHeap = new MinHeap();

const kClosestNumber = (arr, k, num) => {
  //pair abs(arr[i]-x, arr[i])

  for (let i = 0; i < arr.length; i++) {
    minHeap.add(arr[i]);
    //abs(arr[i]-x, arr[i])
    if (minHeap.size() > k) {
      minHeap.poll();
    }
  }

  while (minHeap.size() > 0) {
    console.log(minHeap.peek() + "\n");
    //print the value with associated key
    minHeap.poll();
  }
}

function findClosestNumbers(arr, k, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Create an array of tuples (difference, index)
  const diffArr = arr.map((num, index) => [Math.abs(num - target), index]);

  // Sort the tuples by the first value (the differences)
  diffArr.sort((a, b) => a[0] - b[0]);

  // Retrieve the indices of the K closest numbers
  const indices = diffArr.slice(0, k).map(tuple => tuple[1]);

  // Retrieve the K closest numbers from the original array
  const closestNumbers = indices.map(index => arr[index]);

  return closestNumbers;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const k = 3;
const target = 35;
const closestNumbers = findClosestNumbers(numbers, k, target);
console.log(closestNumbers); // Output: [30, 40, 20]
