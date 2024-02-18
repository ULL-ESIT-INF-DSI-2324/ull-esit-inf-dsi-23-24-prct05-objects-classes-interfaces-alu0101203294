/**
 * @module Ejercicio 9 - Operaciones con listas
 * @summary
 * Implementación de las siguientes funciones:
 * append, length1, reverse, concatenar, reduce, map
 * @example
 * append([1, 2, 3], [4, 5]) // [1, 2, 3, 4, 5]
 * length1([1, 2, 3]) // 3
 * reverse([1, 2, 3]) // [3, 2, 1]
 * concatenar([[1, 2, 3], [4, 5]]) // [1, 2, 3, 4, 5]
 * reduce((accum, item) => accum + item, [1, 2, 3], 10) // 16
 * map((item) => item * 2, [1, 2, 3]) // [2, 4, 6]
 */

export type List<T> = T[];
/**
 * Función que toma dos listas y devuelve la concatenación de las dos listas
 * @param list1 // Lista 1
 * @param list2 // Lista 2
 * @returns     // Retorna la concatenación de las dos listas
 */
export function append<T>(list1: List<T>, list2: List<T>): List<T> {
  return [...list1, ...list2];
}

/**
 * Función que toma una lista y devuelve la longitud de la lista
 * @param list // Lista
 * @returns    // Retorna la longitud de la lista 
 */
export function length1<T>(list: List<T>): number {
  return list.length;
}

/**
 * Función que toma una lista y devuelve la lista invertida
 * @param list // Lista
 * @returns    // Retorna la lista invertida
 */
export function reverse<T>(list: List<T>): List<T> {
  return list.slice().reverse();
}

/**
 * Función que toma una lista de listas y devuelve la concatenación de las listas
 * @param lists // Lista de listas
 * @returns     // Retorna la concatenación de las listas
 */
export function concatenar<T>(lists: List<T>[]): List<T> {
  let concatenated: List<T> = [];
  for (const list of lists) {
    concatenated = append(concatenated, list);
  }
  return concatenated;
}

/**
 * Función que toma una función de reducción, una lista y un acumulador y devuelve el resultado de la reducción
 * @param func      // Función de reducción
 * @param list      // Lista
 * @param accum     // Acumulador
 * @returns         // Retorna el resultado de la reducción
 */
export function reduce<T, R>(
  func: (accum: R, item: T) => R,
  list: List<T>,
  accum: R,
): R {
  return list.reduce(func, accum);
}

/**
 * Función que toma una función de mapeo y una lista y devuelve la lista mapeada
 * @param func  // Función de mapeo
 * @param list  // Lista
 * @returns     // Retorna la lista mapeada
 */
export function map<T, R>(func: (item: T) => R, list: List<T>): List<R> {
  const mappedList: List<R> = [];
  for (const item of list) {
    mappedList.push(func(item));
  }
  return mappedList;
}

// Ejemplo de uso:
const lista1: List<number> = [1, 2, 3];
const lista2: List<number> = [4, 5];

console.log('Original1: ', lista1);

console.log('Original2: ', lista2);

console.log('Append:', append(lista1, lista2));

console.log('Length 1:', length1(lista1), ' - Lenght 2:', length1(lista2));

console.log('Reverse1:', reverse(lista1), ' - Reverse2:', reverse(lista2));

console.log('Reverse + Append', reverse(append(lista1, lista2)));

console.log('Concatenar:', concatenar([lista1, lista2]));

console.log(
  'Reduce:',
  reduce((accum, item) => accum + item, lista1, 10),
);

console.log(
  'Map:',
  map((item) => item * 2, lista1),
);
