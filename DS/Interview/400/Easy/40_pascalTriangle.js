// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers 

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

//  1
//1    1
//1 2   1
//1 3 3 1
//1 4 6 4 1

const generatePascalsTriangle = (numRows) => {
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1); // Create an array of i+1 size and fill it with 1
        for (let j = 1; j < i; j++) {
            // Compute the numbers in the row using previous row
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    return triangle;
}

console.log(generatePascalsTriangle(5));
