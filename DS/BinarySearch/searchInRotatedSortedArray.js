// I/O : arr: [5,6,7,0,2,3]
// target: 7
// sorted array
//O(log n)
//

const searchInRotatedSortedArray = (arr, target) =>{
    let left = 0, right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        }

        if(arr[left] <= arr[mid]){ //left to right is sorted
            if(arr[left] <= target && target < arr[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{ // mid tp right is sorted
            if(arr[mid] < target && target <= arr[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
}

console.log(searchInRotatedSortedArray([5,6,7,0,2,3], 0));