export type Piece = '-' | 'N' | 'B';
export type Board = Piece[][];

export function checkAttack(board: Board): boolean | undefined {
    // Buscar las posiciones de las reinas
    let blackQueenPos: [number, number] | undefined;
    let whiteQueenPos: [number, number] | undefined;

    board.forEach((row, i) => {
        row.forEach((piece, j) => {
            if (piece === 'N') {
                blackQueenPos = [i, j];
            } else if (piece === 'B') {
                whiteQueenPos = [i, j];
            }
        });
    });
    

    // Tienen que estar ambas reinas
    if (!blackQueenPos || !whiteQueenPos) {
        return undefined;
    }

    const blackRow = blackQueenPos[0];
    const blackCol = blackQueenPos[1];
    const whiteRow = whiteQueenPos[0];
    const whiteCol = whiteQueenPos[1];

    // Comprobamos si las dos reinas están en la misma fila, columna o diagonal
    if ( blackRow === whiteRow || blackCol === whiteCol || Math.abs(blackRow - whiteRow) === Math.abs(blackCol - whiteCol)) {
        return true;
    } else {
        return false;
    }
}

// Ejemplo de uso
const board1: Board = [
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', 'N', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', 'B', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
];

const board2: Board = [
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', 'N', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', 'B', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
];

const board3: Board = [
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', 'N', 'B', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
];


const board4: Board = [
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', 'N', '-', '-', '-', '-'],
    ['-', '-', '-', 'B', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
];
console.log(checkAttack(board1)); // TRUE
console.log(checkAttack(board2)); // FALSE
console.log(checkAttack(board3)); // TRUE
console.log(checkAttack(board4)); // FALSE
