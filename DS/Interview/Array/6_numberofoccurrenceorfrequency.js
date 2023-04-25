const countOccurrences = (arr, x) => {
    let count= 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === x){
            count++;
        }
    }

    return count;
}

console.log(countOccurrences([1, 1, 2, 2, 2, 2, 3], 2));

function countOccurrences_(arr, x) {
    let firstIndex = binarySearch(arr, x, true); // find the first occurrence of x
    let lastIndex = binarySearch(arr, x, false); // find the last occurrence of x
    if (firstIndex == -1) {
      // x is not found in the array
      return 0;
    } else {
      // x is found in the array, so return the number of occurrences
      return lastIndex - firstIndex + 1;
    }
  }
  
  function binarySearch(arr, x, searchFirst) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] == x) {
        result = mid;
        if (searchFirst) {
          // search for the first occurrence of x
          right = mid - 1;
        } else {
          // search for the last occurrence of x
          left = mid + 1;
        }
      } else if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  // O(log n)
  console.log(countOccurrences_([1, 1, 2, 2, 2, 2, 3], 2));
