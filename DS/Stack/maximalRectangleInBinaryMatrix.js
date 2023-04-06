const maximalRectangle = () => {

}






// To find the maximum area rectangle in a binary matrix using JavaScript, we can use the following algorithm:

// Define a helper function getMaxAreaInHistogram that takes an array of heights and returns the maximum area rectangle that can be formed by these heights using the "largest rectangle in histogram" algorithm.

// Initialize a variable maxArea to 0.

// Create a new array histogram of the same width as the matrix, initialized to 0.

// For each row in the matrix, update the histogram array as follows:

// a. For each element in the row that is 1, increment the corresponding element in the histogram array by 1.

// b. For each element in the row that is 0, set the corresponding element in the histogram array to 0.

// c. Calculate the maximum area rectangle that can be formed using the current histogram array by calling the getMaxAreaInHistogram function, and update the maxArea variable if the calculated area is greater than maxArea.

// Return the maxArea variable.


function getMaxAreaInHistogram(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            const j = stack.pop();
            const k = stack.length > 0 ? stack[stack.length - 1] : -1;
            const area = heights[j] * (i - k - 1);
            maxArea = Math.max(maxArea, area);
        }

        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        const k = stack.length > 0 ? stack[stack.length - 1] : -1;
        const area = heights[j] * (heights.length - k - 1);
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}

function getMaxRectangleArea(matrix) {
    let maxArea = 0;
    const histogram = new Array(matrix[0].length).fill(0);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                histogram[j]++;
            } else {
                histogram[j] = 0;
            }
        }

        maxArea = Math.max(maxArea, getMaxAreaInHistogram(histogram));
    }

    return maxArea;
}
const matrix = [
    [1, 0, 0, 1, 1],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 0, 0, 1],
];
console.log(getMaxRectangleArea(matrix));

//Max Area Histrogram
const MAH = (heights) => {
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

        // console.log(nextSmallestLeft.join('-->'));

        for (let i = 0; i < nextSmallestLeft.length; i++) {
            nextSmallestLeft[i] = i - nextSmallestLeft[i];
        }

        return nextSmallestLeft;
    }

    const nearestSmallestRight = (nums, size) => {
        const stack = [];
        const nextSmallestRight = [];
        const pseudoIndex = size;
        let nearGreatestElementRightMap = {};
        for (let i = size - 1; i >= 0; i--) {
            if (stack.length === 0) {
                nextSmallestRight.push(pseudoIndex);
            } else if (stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) < nums[i]) {
                nextSmallestRight.push(parseInt(Object.values(stack[stack.length - 1])[0]));
            } else if (stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) >= nums[i]) {
                while (stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) >= nums[i]) {
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

        // console.log(nextSmallestRight.join('-->'));

        for (let i = 0; i < nextSmallestRight.length; i++) {
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

const getMaximumRectangleArea = (maxtrix) => {
    const backedIndex = [];
    for (let j = 0; j < matrix[0].length; j++) {
        backedIndex.push(maxtrix[0][j]);
    }

    let max = MAH(backedIndex);

    for(let i=1; i<matrix.length;i++){
        for(let j=0; j< matrix[i].length; j++){
            if(matrix[i][j] === 0){
                backedIndex[j] = 0
            }else{
                backedIndex[j] = backedIndex[j] + matrix[i][j];
            }
        }
        max = Math.max(max, MAH(backedIndex));
    }

    return max;
}

console.log(getMaximumRectangleArea(matrix));
