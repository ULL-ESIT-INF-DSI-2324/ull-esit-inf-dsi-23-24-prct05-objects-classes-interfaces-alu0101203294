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
    return function(value: number): number[] {
        return numbers.map(num => num * value);
    };
}

// Ejemplos de uso
console.log(multiplyAll([2, 6, 8])(3)); // Devuelve [6, 18, 24]
console.log(multiplyAll([])(3)); // Devuelve []
