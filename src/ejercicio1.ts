/**
 * Ejercicio 1
 * Definición de tipo para números racionales
 */
type Racional = [number, number];

/**
 * Función para calcular el máximo común divisor (MCD)
 * @param num   // Numerador
 * @param denom // Denominador
 * @returns     // Retorna el máximo común divisor (MCD) de dos números
 * ```typescript	
 * mcd(12, 8) // 4
 * ```
 */
export function mcd(num: number, denom: number): number {  
    if (denom === 0) {
        return num;
    } else {
        return mcd(denom, num % denom);
    }
}

/**
 * Función para simplificar un número racional
 * @param racional // Número racional
 * @returns        // Retorna el número racional simplificado 
 * ```typescript
 * simplificarRacional([5, 20]) // [1, 4]
 * ```
 */
export function simplificarRacional(racional: Racional): Racional {
    const [num, denom] = racional;
    const divisor = mcd(num, denom);
    return [num / divisor, denom / divisor];
}

/**
 * Función para calcular el valor absoluto de un número racional
 * @param racional  // Número racional
 * @returns         // Retorna el valor absoluto del número racional
 * ```typescript
 * abs([5, 20]) // [1, 4]
 * ```
 */
export function abs(racional: Racional): Racional {
    const [num, denom] = racional;
    return simplificarRacional([Math.abs(num), Math.abs(denom)]);
}


/**
 * Función para calcular el inverso multiplicativo de un número racional
 * @param racional  // Número racional
 * @returns         // Retorna el inverso multiplicativo del número racional
 * ```typescript
 * inv([5, 20]) // [4, 1]
 * ```
 */
export function inv(racional: Racional): Racional {
    const [num, denom] = racional;
    if (num === 0) {
        throw new Error('No se puede calcular el inverso multiplicativo de 0.');
    }
    return simplificarRacional([denom, num]);
}


/**
 * Función para sumar dos números racionales
 * @param racional1 // Número racional 1
 * @param racional2 // Número racional 2
 * @returns         // Retorna la suma de los dos números racionales
 * ```typescript
 * add([5, 20], [3, 8]) // [5, 8]
 * ```
 */
export function add(racional1: Racional, racional2: Racional): Racional {
    const [num1, denom1] = racional1;
    const [num2, denom2] = racional2;
    const nuevoDenom = denom1 * denom2;
    const nuevoNum = num1 * denom2 + num2 * denom1;
    return simplificarRacional([nuevoNum, nuevoDenom]);
}


/**
 * Función para restar dos números racionales
 * @param racional1 // Número racional 1
 * @param racional2 // Número racional 2
 * @returns         // Retorna la resta de los dos números racionales
 * ```typescript
 * sub([5, 20], [3, 8]) // [1, -8]
 * ```
 */
export function sub(racional1: Racional, racional2: Racional): Racional {
    const [num1, denom1] = racional1;
    const [num2, denom2] = racional2;
    const nuevoDenom = denom1 * denom2;
    const nuevoNum = num1 * denom2 - num2 * denom1;
    return simplificarRacional([nuevoNum, nuevoDenom]);
}


/**
 * Función para multiplicar dos números racionales
 * @param racional1 // Número racional 1
 * @param racional2 // Número racional 2
 * @returns         // Retorna la multiplicación de los dos números racionales
 * ```typescript
 * mult([5, 20], [3, 8]) // [3, 32]
 * ```
 */
export function mult(racional1: Racional, racional2: Racional): Racional {
    const [num1, denom1] = racional1;
    const [num2, denom2] = racional2;
    const nuevoNum = num1 * num2;
    const nuevoDenom = denom1 * denom2;
    return simplificarRacional([nuevoNum, nuevoDenom]);
}


/**
 * Función para dividir dos números racionales
 * @param racional1 // Número racional 1
 * @param racional2 // Número racional 2
 * @returns         // Retorna la división de los dos números racionales
 * ```typescript
 * div([5, 20], [3, 8]) // [2, 3]
 * ```
 */
export function div(racional1: Racional, racional2: Racional): Racional {
    const [num1, denom1] = racional1;
    const [num2, denom2] = racional2;
    if (num2 === 0) {
        throw new Error('No se puede dividir por 0.');
    }
    const nuevoNum = num1 * denom2;
    const nuevoDenom = denom1 * num2;
    return simplificarRacional([nuevoNum, nuevoDenom]);
}


/**
 * Ejemplo de uso de las funciones
 */
const racional1: Racional = [5, 20];
const racional2: Racional = [3, 8];

console.log('Valor absoluto de', racional1, 'es', abs(racional1));                              // [1, 4]
console.log('Inverso multiplicativo de', racional1, 'es', inv(racional1));                      // [4, 1]
console.log('Suma de', racional1, 'y', racional2, 'es', add(racional1, racional2));             // [5, 8]
console.log('Resta de', racional1, 'y', racional2, 'es', sub(racional1, racional2));            // [1, -8]
console.log('Multiplicación de', racional1, 'y', racional2, 'es', mult(racional1, racional2));  // [3, 32]
console.log('División de', racional1, 'y', racional2, 'es', div(racional1, racional2));         // [2, 3]
