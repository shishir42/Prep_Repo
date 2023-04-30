// Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
// Output: "A"
// Explanation: A wins, they always play first.

// Topics: Array;Hash Table;Matrix;Simulation

function tictactoe(moves) {
    // initialize board and player
    const board = [[], [], []];
    let player = 'A';
    
    // iterate through moves and update board
    for (let i = 0; i < moves.length; i++) {
        const row = moves[i][0];
        const col = moves[i][1];
        board[row][col] = player;
        
        // check if player wins
        if (
            checkRow(board, row, player) ||
            checkCol(board, col, player) ||
            checkDiagonal(board, player)
        ) {
            return player;
        }
        
        // switch player
        player = player === 'A' ? 'B' : 'A';
    }
    
    // no winner yet
    return moves.length === 9 ? 'Draw' : 'Pending';
}

// check if all elements in the row are the same as the player
function checkRow(board, row, player) {
    for (let i = 0; i < 3; i++) {
        if (board[row][i] !== player) {
            return false;
        }
    }
    return true;
}

// check if all elements in the column are the same as the player
function checkCol(board, col, player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][col] !== player) {
            return false;
        }
    }
    return true;
}

// check if all elements in the diagonal are the same as the player
function checkDiagonal(board, player) {
    if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
    ) {
        return true;
    }
    if (
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
    ) {
        return true;
    }
    return false;
}

// Example usage
const moves = [[0,0],[2,0],[1,1],[2,1],[2,2]];
console.log(tictactoe(moves)); // Output: "A"
