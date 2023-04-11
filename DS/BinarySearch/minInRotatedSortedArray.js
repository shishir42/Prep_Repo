// I/O : arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// sorted array
//O(log n)
//

const minInRotatedSortedArray = (nums) =>{
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.min(nums[0], nums[1]);
    if(nums[0] <= nums[nums.length-1]) return nums[0];
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = left + Math.floor((left + right) / 2);

        // array is decreasing at mid + 1;
        if(nums[mid] > nums[mid+1]) return nums[mid+1];

        // array is decreasing at mid
        if(nums[mid-1] > nums[mid]) return nums[mid];

        // discard the sorted part 
        if(nums[left] < nums[right]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return 0;
}

console.log(minInRotatedSortedArray([5,6,7,0,2,3]));