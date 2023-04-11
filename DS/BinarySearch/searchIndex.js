// sorted array in ascending order 
// search function return index if item is present otherwise return -1 

// t.c -> O(logn)

function linearSearch(sortedArray, searchItem) {
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === searchItem) {
            return i;
        } else if (sortedArray[i] > searchItem) {
            // If the current element is greater than the search item, 
            // we know that the search item is not in the array because
            // the array is sorted in ascending order.
            break;
        }
    }

    return -1;
}

// The reason for using the formula left + (right - left) is to avoid potential overflow errors that could occur when adding two large integers.

// If the array is very large, the sum of left and right could exceed the maximum safe integer value in JavaScript (2^53 - 1), which could cause the calculation to produce incorrect results.

// By using left + (right - left) instead of (left + right) / 2, we avoid adding two large integers and reduce the risk of overflow errors.

function binarySearch(arr, target){
    let left = 0, right = arr.length - 1;
    while(left <= right){
        // let mid = Math.floor((left + right) / 2);
        let mid = left + Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){ //towards right
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3))