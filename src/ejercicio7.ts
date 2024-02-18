/**
 * @module Ejercicio 7 - El Cartesiano
 * @summary
 * Crear una función llamada getCartesianPath que tome como argumento un array de letras que representan las direcciones del paseo generado por la aplicación y un número entero n que representa el tiempo disponible. La función deberá devolver verdadero si el paseo se puede completar exactamente en n minutos, considerando que cada bloque se recorre en un minuto y que queremos regresar al punto de partida. De lo contrario, la función deberá devolver falso. En caso de recibir argumentos no válidos, como un array vacío, la función deberá devolver undefined.
 * @example
 * getCartesianPath(['n', 's', 'e', 'o'], 4) // true - (norte, sur, este, oeste)
 * getCartesianPath(['n', 's', 'e', 'o'], 5) // false - (No se puede realizar en 5 minutos)
 * getCartesianPath(['n', 's', 'e', 'o', 'n', 's'], 6) // true - (norte, sur, este, oeste, norte, sur)
 * getCartesianPath([], 5) // undefined - (No se puede realizar un paseo sin movimientos)
 */

/**
 * Función que recibe como argumento un array con las letras que definen el paseo que ha generado la app y devuelva verdadero o falso si el paseo se puede realizar en exactamente n minutos
 * @param path      // Array con las letras que definen el paseo que ha generado la app
 * @param minutes   // Número de minutos que debe durar el paseo
 * @returns         // Retorna verdadero si el paseo se puede realizar en exactamente n minutos, falso si no se puede realizar en exactamente n minutos y undefined si los argumentos de entrada no son válidos
 * ```typescript
 * getCartesianPath(['n', 's', 'e', 'o'], 4) // true - (norte, sur, este, oeste)
 * getCartesianPath(['n', 's', 'e', 'o'], 5) // false - (No se puede realizar en 5 minutos)
 * getCartesianPath(['n', 's', 'e', 'o', 'n', 's'], 6) // true - (norte, sur, este, oeste, norte, sur)
 * getCartesianPath([], 5) // undefined - (No se puede realizar un paseo sin movimientos)
 * ```
 */
export function getCartesianPath(path: string[], minutes: number): boolean | undefined {
    // Validar argumentos de entrada
    if (!Array.isArray(path) || path.length === 0 || minutes < 0 || !Number.isInteger(minutes)) {
        return undefined;
    }

    // Contar los movimientos en cada dirección
    const movements: { [key: string]: number } = {
        'n': 0,
        's': 0,
        'e': 0,
        'o': 0
    };

    for (const direction of path) {
        if (movements.hasOwnProperty(direction)) {
            movements[direction]++;
        }
    }

    // Verificar si el camino nos devuelve al punto de partida
    return movements['n'] === movements['s'] && movements['e'] === movements['o'] && path.length === minutes;
}

// Ejemplos de uso
console.log(getCartesianPath(['n', 's', 'e', 'o'], 4)); // Devuelve true
console.log(getCartesianPath(['n', 's', 'e', 'o'], 5)); // Devuelve false
console.log(getCartesianPath(['n', 's', 'e', 'o', 'n', 's'], 6)); // Devuelve true
console.log(getCartesianPath([], 5)); // Devuelve undefined
