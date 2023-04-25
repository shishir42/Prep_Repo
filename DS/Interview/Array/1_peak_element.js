// find a peak element in an array in javascript 
// const nums = [1, 2, 3, 1];
// Output: 2

//find index // O(N)
const findPeakUsingNaiveApproach = (arr) => {
    const n = arr.length;
    // First or last element is peak element
    if(n === 1){
        return 0;
    }
    if(arr[0] >= arr[1]){
        return 0;
    }
    if(arr[n-1] >= arr[n-2]){
        return n-1;
    }

    for(let i=1; i<n; i++){
        // Check if the neighbors are smaller
        if(arr[i]>= arr[i-1] && arr[i]>=arr[i+1]){
            return i;
        }
    }

    return 0;
}

const nums = [1, 2, 3, 1];
console.log(findPeakUsingNaiveApproach(nums)); // Output: 2

//find index // 
const findPeakElementUsingBinarySearch = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] < arr[mid + 1]){
            left = mid + 1;
        }else{
            right = mid;
        }
    }

    return left;
}

console.log(findPeakElementUsingBinarySearch(nums)); // Output: 2