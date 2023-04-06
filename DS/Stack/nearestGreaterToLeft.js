// arr = [1, 3, 2, 4] 
// O/P = [-1, -1, 3, -1]

//brute force

// for(let i=0; i<n; i++){
//     for(let j=i-1; j>=0; j--){
// j is dependent on i
//     }
// }

const nextGreaterElementsToLeft = (nums) =>{
    const stack = [];
    const nextGreater = [];
    const n = nums.length;

    for(let i=0; i<n; i++){
        if(stack.length === 0){
            nextGreater.push(-1);
        }else if(stack.length > 0 && stack[stack.length-1]>nums[i]){
            nextGreater.push(stack[stack.length - 1]);
        }else if(stack.length > 0 && stack[stack.length-1]<=nums[i]){
            while(stack.length > 0 && stack[stack.length-1]<=nums[i]){
                stack.pop();
            }
            if(stack.length === 0){
                nextGreater.push(-1);
            }else{
                nextGreater.push(stack[stack.length - 1]);
            }
        }

        stack.push(nums[i]);
    }

    return nextGreater;
}

console.log(nextGreaterElementsToLeft([1, 3, 2, 4]));