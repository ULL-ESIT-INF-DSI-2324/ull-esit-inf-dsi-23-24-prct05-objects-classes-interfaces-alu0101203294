/**
 * @module Ejercicio 5 - Tablas de multiplicar
 * @summary
 * Crear una función llamada productTable que reciba como parámetro un número N mayor o igual a 1 y devuelva un array de arrays con N tablas de multiplicar, donde cada tabla de multiplicar contiene los primeros N productos. En caso de que el argumento no sea correcto, la función debe devolver undefined.
 * @example
 * productTable(2) // [[1, 2], [2, 4]]
 * productTable(3) // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
 * productTable(4) // [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
 */

/**
 * Función que recibe un número entero positivo N y devuelve un array de arrays con N tablas de multiplicar, donde cada tabla de multiplicar contiene los primeros N productos
 * @param N     // Número entero positivo
 * @returns     // Retorna un array de arrays con N tablas de multiplicar
 * ```typescript
 * productTable(2) // [[1, 2], [2, 4]]
 * productTable(3) // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
 * productTable(4) // [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
 * ```
 */
export function productTable(N: number): number[][] | undefined {
  // Validación del argumento de entrada
  if (N < 1 || !Number.isInteger(N)) {
    return undefined;
  }

  // Crear la tabla de multiplicar
  const table: number[][] = [];
  for (let i = 1; i <= N; i++) {
    const row: number[] = [];
    for (let j = 1; j <= N; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

// Ejemplos de uso
console.log(productTable(2)); // Resultado: [[1, 2], [2, 4]]
console.log(productTable(3)); // Resultado: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
console.log(productTable(4)); // Resultado: [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
console.log(productTable(-1)); // Devuelve undefined
console.log(productTable(0)); // Devuelve undefined
console.log(productTable(1.5)); // Devuelve undefined
