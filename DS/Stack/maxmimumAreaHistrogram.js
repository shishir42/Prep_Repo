// Input: heights = [2,1,5,6,2,3]
// Output: 10

// Input: heights = [2,4]
// Output: 4

// Input: heights = [6,2,5,4,5,1,6]
// Output: 12

const largestRectangleArea = (heights) => {
    const size = heights.length;
    const width = [];
    const area = [];
    const nearestSmallestLeft = (nums, size) => {
        const stack = [];
        const nextSmallestLeft = [];
        const pseudoIndex = -1;
        let nearGreatestElementLeftMap = {};
        for (let i = 0; i < size; i++) {
            if (stack.length === 0) {
                nextSmallestLeft.push(pseudoIndex);
            } else if (stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) < nums[i]) {
                nextSmallestLeft.push(parseInt(Object.values(stack[stack.length - 1])[0]));
            } else if (stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) >= nums[i]) {
                while (stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) >= nums[i]) {
                    stack.pop();
                }

                if (stack.length === 0) {
                    nextSmallestLeft.push(pseudoIndex);
                } else {
                    nextSmallestLeft.push(parseInt(Object.values(stack[stack.length - 1])[0]))
                }
            }
            nearGreatestElementLeftMap = {}
            nearGreatestElementLeftMap[nums[i]] = i;
            stack.push(nearGreatestElementLeftMap);
        }

        console.log(nextSmallestLeft.join('-->'));

        for(let i=0; i< nextSmallestLeft.length; i++){
            nextSmallestLeft[i] = i - nextSmallestLeft[i];
        }

        return nextSmallestLeft;
    }

    const nearestSmallestRight = (nums, size) => {
        const stack = [];
        const nextSmallestRight = [];
        const pseudoIndex = size;
        let nearGreatestElementRightMap = {};
        for(let i=size-1; i>=0; i--){
            if(stack.length === 0){
                nextSmallestRight.push(pseudoIndex);
            }else if(stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) < nums[i]){
                nextSmallestRight.push(parseInt(Object.values(stack[stack.length - 1])[0]));
            }else if(stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) >= nums[i]){
                while(stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) >= nums[i]){
                    stack.pop();
                }
                if (stack.length === 0) {
                    nextSmallestRight.push(pseudoIndex);
                } else {
                    nextSmallestRight.push(parseInt(Object.values(stack[stack.length - 1])[0]))
                }
            }

            nearGreatestElementRightMap = {}
            nearGreatestElementRightMap[nums[i]] = i;
            stack.push(nearGreatestElementRightMap);
        }

        nextSmallestRight.reverse();

        console.log(nextSmallestRight.join('-->'));

        for(let i=0; i< nextSmallestRight.length; i++){
            nextSmallestRight[i] = i - nextSmallestRight[i];
        }
        return nextSmallestRight;
    }

    let nearestSmallestRightIndex = nearestSmallestLeft(heights, size);
    let nearestSmallestLeftIndex = nearestSmallestRight(heights, size);

    for (let i = 0; i < size; i++) {
        width[i] = nearestSmallestRightIndex[i] - nearestSmallestLeftIndex[i] - 1;
    }

    for (let i = 0; i < size; i++) {
        area[i] = heights[i] * width[i];
    }

    const maxArea = Math.max(...area);

    return maxArea;
}

function maxAreaHistogram(histogram) {
    const stack = [];
    let maxArea = 0;
    let i = 0;
    while (i < histogram.length) {
        if (stack.length === 0 || histogram[i] >= histogram[stack[stack.length - 1]]) {
            stack.push(i);
            i++;
        } else {
            const topIndex = stack.pop();
            const area = histogram[topIndex] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, area);
        }
    }
    while (stack.length > 0) {
        const topIndex = stack.pop();
        const area = histogram[topIndex] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
}

// console.log(maxAreaHistogram([6, 2, 5, 4, 5, 1, 6]));
console.log(largestRectangleArea([6, 2, 5, 4, 5, 1, 6]));
console.log(largestRectangleArea([2,1,5,6,2,3]));
console.log(largestRectangleArea([2,4]));