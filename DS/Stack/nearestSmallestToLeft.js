// Nearest smaller element

// Input arr = [4,5,2,10,8]
// Output = [-1,4,-1,2,2]

// Brute force
// for(let i=0;i<n;i++){
//     for(let j=i-1;j>0;j--){

//     }
// }


const nearestSmallestToLeft = (nums) =>{
    const stack = [];
    const nextSmallest = [];
    const n = nums.length;
    for(let i=0; i<n; i++){
        if(stack.length === 0){
            nextSmallest.push(-1);
        }else if(stack.length > 0 && stack[stack.length - 1] < nums[i]){
            nextSmallest.push(stack[stack.length - 1]);
        }else if(stack.length > 0 && stack[stack.length - 1]>= nums[i]){
            while(stack.length > 0 && stack[stack.length - 1]>= nums[i]){
                stack.pop();
            }

            if(stack.length === 0){
                nextSmallest.push(-1);
            }else{
                nextSmallest.push(stack[stack.length - 1]);
            }   
        }
        stack.push(nums[i]);
    }
    return nextSmallest;
}

console.log(nearestSmallestToLeft([4,5,2,10,8]))