/**
 * @module Ejercicio 6 - Factoría de multiplicaciones
 * @summary
 * Crear una función llamada multiplyAll que tome como parámetro un array de números y devuelva otra función. Esta segunda función tomará un único valor numérico como argumento y devolverá un nuevo array que es el resultado de multiplicar cada número del array original por el valor numérico proporcionado.
 * @example
 * multiplyAll([2, 6, 8])(3) // [6, 18, 24]
 * multiplyAll([])(3)        // []
 */

/**
 * Función que devuelve como resultado otra función que toma como argumento un único valor numérico y devuelve un array con el resultado de multiplicar cada elemento del array por el valor numérico
 * @param numbers   // Array de números
 * @returns         // Retorna una función que toma como argumento un único valor numérico y devuelve un array con el resultado de multiplicar cada elemento del array por el valor numérico
 * ```typescript
 * multiplyAll([2, 6, 8])(3) // [6, 18, 24]
 * multiplyAll([])(3)        // []
 * ```
 */
export function multiplyAll(numbers: number[]): (value: number) => number[] {
  return function (value: number): number[] {
    return numbers.map((num) => num * value);
  };
}

// Ejemplos de uso
console.log(multiplyAll([2, 6, 8])(3)); // Devuelve [6, 18, 24]
console.log(multiplyAll([])(3)); // Devuelve []
