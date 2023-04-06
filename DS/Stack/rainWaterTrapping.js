// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Input: height = [4,2,0,3,2,5]
// Output: 9

const trapRainWater = (heights) => {
    const n = heights.length;
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    //Fill the leftMax array
    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }

    //Fill the rightMax array
    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }

    // Calculate trapped water
    let totalWater = 0;
    for (let i = 0; i < n; i++) {
        let waterAbove = Math.min(leftMax[i], rightMax[i]) - heights[i];
        totalWater += waterAbove > 0 ? waterAbove : 0;
    }

    return totalWater;
}

console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));