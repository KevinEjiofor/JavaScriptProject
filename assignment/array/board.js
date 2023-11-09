function createBoard(length, width, pieces) {

    const board = [];
    for (let i = 0; i < length; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            row.push(' ');
        }
        board.push(row);
    }

    
    for (const piece of pieces) {
        const row = piece.row;
        const col = piece.col;
        const value = piece.value;

    
        if (row >= 0 && row < length && col >= 0 && col < width) {
            board[row][col] = value;
        }
    }

    return board;
}


const length = 3;
const width = 3;
const pieces = [
    { row: 0, col: 0, value: 'X' },
    { row: 0, col: 1, value: 'X' },
    { row: 0, col: 2, value: 'O' },
    { row: 1, col: 0, value: 'O' },
    { row: 1, col: 2, value: 'X' },
    { row: 2, col: 0, value: 'X' },
    { row: 2, col: 1, value: 'O' },
    { row: 2, col: 2, value: 'O' },

    
];

const gameBoard = createBoard(length, width, pieces);


for (const row of gameBoard) {
    console.log(row.join(' '));
}

