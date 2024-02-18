/**
 * @module Ejercicio 2 - Señales corporales
 * @summary
 * Convertir un número entero positivo en una lista de señales corporales, según un conjunto predefinido de señales. Cada señal corporal se asigna a un valor numérico específico. La función debe manejar correctamente los casos en los que el número recibido como argumento no es un entero positivo, devolviendo undefined.
 * @example
 * fromIntToActions(192) // [Agacharse, Dar un aplauso]
 * fromIntToActions(129) // [Parpadear, Dar un aplauso]
 * fromIntToActions(257) // [Parpadear]
 * fromIntToActions(256) // []
 * fromIntToActions(515) // [Parpadear, Parpadear dos veces]
 * fromIntToActions(84)  // [Mover la nariz, Saltar, Agacharse]
 * fromIntToActions(-14) // undefined
 */
/**
 * @enum SeñalCorporal
 */
export enum SeñalCorporal {
  'Parpadear' = 1,
  'Parpadear dos veces' = 2,
  'Mover la nariz' = 4,
  'Levantar las cejas' = 8,
  'Saltar' = 16,
  'Saltar a la pata coja' = 32,
  'Agacharse' = 64,
  'Dar un aplauso' = 128,
}
/**
 * @type Señal
 */
export type Señal = keyof typeof SeñalCorporal;

/**
 * Dado un número entero, devuelve un array con las señales corporales que se pueden realizar
 * @param numero // Número entero
 * @returns      // Retorna un array con las señales corporales que se pueden realizar
 * ```typescript
 * fromIntToActions(192) // [Agacharse, Dar un aplauso]
 * fromIntToActions(129) // [Parpadear, Dar un aplauso]
 * fromIntToActions(257) // [Parpadear]
 * fromIntToActions(256) // []
 * fromIntToActions(515) // [Parpadear, Parpadear dos veces]
 * fromIntToActions(84)  // [Mover la nariz, Saltar, Agacharse]
 * fromIntToActions(-14) // undefined
 * ```
 */
export function fromIntToActions(numero: number): SeñalCorporal[] | undefined {
  if (numero <= 0 || !Number.isInteger(numero)) {
    return undefined;
  }

  const acciones: SeñalCorporal[] = [];

  for (const señal in SeñalCorporal) {
    const valor = parseInt(señal);
    if (!isNaN(valor) && (numero & valor) === valor) {
      acciones.push(SeñalCorporal[señal as Señal]);
      numero -= valor;
    }
  }

  return acciones;
}

// Ejemplos de uso
console.log(fromIntToActions(192)); // Devuelve [Agacharse, Dar un aplauso] (192 = 64 + 128)
console.log(fromIntToActions(129)); // Devuelve [Parpadear, Dar un aplauso] (129 = 1 + 128)
console.log(fromIntToActions(257)); // Devuelve [Parpadear] (257 = 1)
console.log(fromIntToActions(256)); // Devuelve [] (256 = 0)
console.log(fromIntToActions(515)); // Devuelve [Parpadear, Parpadear dos veces] (515 = 1 + 2 + 512)
console.log(fromIntToActions(84)); // Devuelve [Mover la nariz, Saltar, Agacharse] (84 = 4 + 16 + 64)
console.log(fromIntToActions(-14)); // Devuelve undefined (-14 < 0) (número negativo)
