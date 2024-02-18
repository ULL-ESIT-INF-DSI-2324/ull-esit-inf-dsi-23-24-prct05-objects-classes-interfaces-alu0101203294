/**
 * Calcula los puntos ganados por un jugador al completar una fase de un juego.
 * Los puntos dependen, tanto de la fase completada, como de los objetos que se han recolectado durante la misma, siguiendo el algoritmo:
 * @param phase     // Fase completada
 * @param objects   // Objetos recolectados
 * @returns         // Retorna el total de puntos ganados
 * ```typescript
 * getPoints(25, [2, 3, 7]) // 211
 * getPoints(10, [3, 5])    // 23
 * ```
 */
export function getPoints(phase: number, objects: number[]): number | undefined {
    // Validación de los argumentos de entrada
    if (phase < 0 || objects.some(object => object < 0)) {
        return undefined;
    }


    /**
     * Función para obtener los múltiplos de un objeto hasta la fase
     * @param object   // Objeto del que se quieren obtener los múltiplos 
     * @returns        // Retorna un array con los múltiplos del objeto
     * ```typescript
     * getMultiples(2) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
     * getMultiples(3) // [3, 6, 9, 12, 15, 18, 21, 24]
     * getMultiples(7) // [7, 14, 21]
     * ```
     */
    function getMultiples(object: number): number[] {
        const multiples: number[] = [];
        let multiple = object;
        while (multiple < phase) {
            multiples.push(multiple);
            multiple += object;
        }
        return multiples;
    }

    // Calcular los múltiplos para cada objeto
    const allMultiples: number[] = objects.flatMap(object => getMultiples(object));

    // Eliminar duplicados y sumar los elementos únicos
    const uniqueMultiples = Array.from(new Set(allMultiples));
    const totalPoints = uniqueMultiples.reduce((acc, curr) => acc + curr, 0);

    return totalPoints;
}

// Ejemplo de uso
console.log(getPoints(25, [2, 3, 7])); // Devuelve 211
console.log(getPoints(10, [3, 5]));    // Devuelve 23
