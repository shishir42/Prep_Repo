// Transpose Matrix
// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

const transpose = (matrix) =>{
    const m = matrix.length; // number of rows
    const n = matrix[0].length; //number of cols

    const result = [];

    // Loop through each column in the matrix
    for(let j=0;j<n;j++){
        const row = [];
        // Loop through each row in the matrix and add the corresponding element to the row array
        for(let i=0; i<m; i++){
            row.push(matrix[i][j]);
        }

        // Add the row array to the result array
        result.push(row);
    }

    return result;
}

const matrix = [[1,2,3],[4,5,6]];
const transposedMatrix = transpose(matrix);
console.log(transposedMatrix); // Output: [[1,4],[2,5],[3,6]]