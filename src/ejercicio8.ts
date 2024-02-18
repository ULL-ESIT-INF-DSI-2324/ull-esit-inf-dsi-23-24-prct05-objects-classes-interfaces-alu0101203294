/**
 * @module Ejercicio 8 - Todos los caminos llevan a Roma
 * @summary
 * Crear una función llamada getPaths que tome como argumento una matriz de tamaño N x M, donde N representa el número de filas y M el número de columnas. La función debe devolver una lista de todos los posibles caminos que llevan desde la esquina superior izquierda de la matriz a la esquina inferior derecha, moviéndose solo hacia abajo en el número de filas o hacia la derecha en el número de columnas. Cada camino debe ser representado como una lista con las componentes de la matriz visitadas durante el mismo.
 * @example
 * getPaths(3, 2, [[0, 1], [2, 3], [4, 5]]) // [ [ 0, 1, 3, 5 ], [ 0, 2, 3, 5 ], [ 0, 2, 4, 5 ] ]
 */

/**
 * Dada una matriz de N filas y M columnas devuelva una lista de todos los posibles caminos que llevan desde la esquina superior izquierda de la matriz a la esquina inferior derecha
 * @param N         // Número de filas de la matriz
 * @param M         // Número de columnas de la matriz
 * @param matrix    // Matriz de N filas y M columnas
 * @returns         // Retorna una lista de todos los posibles caminos que llevan desde la esquina superior izquierda de la matriz a la esquina inferior derecha
 * ```typescript
 * getPaths(3, 2, [[0, 1], [2, 3], [4, 5]]) // [ [ 0, 1, 3, 5 ], [ 0, 2, 3, 5 ], [ 0, 2, 4, 5 ] ]
 * ```
 */
export function getPaths(N: number, M: number, matrix: number[][]): number[][] {
    if (N === 0 || M === 0) return [];

    const paths: number[][] = [];
    const stack: { row: number, col: number, path: number[] }[] = [];

    stack.push({ row: 0, col: 0, path: [matrix[0][0]] });

    while (stack.length > 0) {
        const { row, col, path } = stack.pop()!;
        
        if (row === N - 1 && col === M - 1) {
            paths.push(path);
            continue;
        }
        
        if (row + 1 < N) {
            stack.push({ row: row + 1, col, path: [...path, matrix[row + 1][col]] });
        }
        
        if (col + 1 < M) {
            stack.push({ row, col: col + 1, path: [...path, matrix[row][col + 1]] });
        }
    }

    return paths;
}

// Ejemplo de uso
console.log(getPaths(3, 2, [[0, 1], [2, 3], [4, 5]])); // Devuelve [ [ 0, 1, 3, 5 ], [ 0, 2, 3, 5 ], [ 0, 2, 4, 5 ] ]
console.log(getPaths(0, 2, [])); // Devuelve []
