const nextGreaterElementsNaiveApproach = (nums) => {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n + i; j++) {
            if (nums[j % n] > nums[i]) {
                result[i] = nums[j % n];
                break;
            }
        }
    }
    return result;
}


const nextGreaterElements = (arr) => {
    const stack = [];
    const nextGreater = [];
    const n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        if (stack.length === 0) {
            nextGreater.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
            nextGreater.push(stack[stack.length - 1]);
        } else if (stack.length > 0 && stack[stack.length] <= arr[i]) {
            while (stack[stack.length] <= arr[i]) {
                stack.pop();
            }

            if (stack.length === 0) {
                nextGreater.push(-1);
            } else {
                nextGreater.push(stack[stack.length - 1]);
            }
        }

        stack.push(arr[i]);
    }

    return nextGreater.reverse();
}



// console.log(nextGreaterElements([1, 2, 3,4]));//[2,3,4,-1]  
console.log(nextGreaterElements([1, 2, 1]));//[2,-1,2]  
console.log(nextGreaterElementsNaiveApproach([1, 2, 1]));//[2,-1,2]  
