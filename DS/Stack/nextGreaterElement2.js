//1. stack empty 
//2. s.top> arr[i] ...... s.top()
//3. s.top() <= arr[i] ......pop() 

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.

//next largest element or Nearest greater to right

const nextGreaterElements1 = (nums) =>{
    const stack = [];
    const nextGreater = [];
    const n = nums.length;
    for(let i=n-1; i>=0; i--){
        if(stack.length === 0){
            nextGreater.push(-1);
        }else if(stack.length > 0 && stack[stack.length - 1] > nums[i]){
            nextGreater.push(stack[stack.length - 1]);
        }else if(stack.length > 0 && stack[stack.length - 1]  <= nums[i]){
            while(stack.length > 0 && stack[stack.length - 1]  <= nums[i]){
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

    return nextGreater.reverse();
}

function nextGreaterElements(nums) {
    const stack = [];
    const nextGreater = {};
    const n = nums.length;
    
    // Step 1: Traverse nums from right to left
    for (let i = n - 1; i >= 0; i--) {
      const num = nums[i];
      
      // Step 2: Pop elements from stack that are <= current element
      while (stack.length > 0 && stack[stack.length - 1] <= num) {
        stack.pop();
      }
      
      // Step 3: Set value in dictionary for current element
      if (stack.length === 0) {
        nextGreater[num] = -1;
      } else {
        nextGreater[num] = stack[stack.length - 1];
      }
      
      // Step 4: Push current element onto stack
      stack.push(num);
    }
    
    // Step 5: Traverse nums again and get values from dictionary
    const output = [];
    for (let i = 0; i < n; i++) {
      const num = nums[i];
      output.push(nextGreater[num]);
    }
    
    return output;
  }
  

  console.log(nextGreaterElements1([1, 2, 3,4]));//[2,3,4,-1]  
console.log(nextGreaterElements1([1, 2, 1]));//[2,-1,2]  
console.log(nextGreaterElements([1, 2, 1]));//[2,-1,2]
console.log(nextGreaterElements([1, 2, 3,4])); //[2,3,4,-1]