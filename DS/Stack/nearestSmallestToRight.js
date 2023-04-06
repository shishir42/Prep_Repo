// Input: nums = [4,5,2,10,8]
// Output: [2,2,-1,8,-1]

// Brute force
// for(let i=0; i<n-1; i++){
//     for(let j=i+1; j<n; j++){

//     }
// }

const nearestSmallestToRight = (nums) =>{
    const stack = [];
    const nextSmaller = [];
    const n = nums.length;

    for(let i=n-1; i>=0; i--){
        if(stack.length === 0){
            nextSmaller.push(-1);
        }else if(stack.length > 0 && stack[stack.length - 1] < nums[i]){
            nextSmaller.push(stack[stack.length - 1]);
        }else if(stack.length > 0 && stack[stack.length - 1]  >= nums[i]){
            while(stack.length > 0 && stack[stack.length - 1]  >= nums[i]){
                stack.pop();
            }

            if(stack.length === 0){
                nextSmaller.push(-1);
            }else{
                nextSmaller.push(stack[stack.length - 1]);
            }
        }

        stack.push(nums[i]);
    }

    return nextSmaller.reverse();
}

console.log(nearestSmallestToRight([4,5,2,10,8]))