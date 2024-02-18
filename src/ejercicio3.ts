/**
 * Dada una lista de palabras, devuelve un array con la puntuación de cada palabra
 * @param words 
 * @returns 
 * ```typescript
 * getScore([]) // []
 * getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón']) // [undefined, 12, 11, undefined, 5]
 * getScore(['Hola', 'me', 'llamo', 'Jose', 'chao']) // [7, 4, 13, 11, 7]
 * ```
 */
export function getScore(words: string[]): (number | undefined)[] {
    const scores: { [key: string]: number } = {
        'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1,
        'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
        'd': 2, 'g': 2,
        'b': 3, 'c': 3, 'm': 3, 'p': 3,
        'f': 4, 'h': 4, 'v': 4, 'y': 4,
        'ch': 5, 'q': 5,
        'j': 8, 'll': 8, 'ñ': 8, 'rr': 8, 'x': 8,
        'z': 10
    };

    const noAccents: { [key: string]: string } = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
    };

    const result: (number | undefined)[] = [];

    for (const word of words) {
        let score = 0;
        let valid = true;
        let i = 0;
        while (i < word.length) {
            let letter = word[i].toLowerCase();
            if (letter === 'l' && i < word.length - 1 && word[i + 1].toLowerCase() === 'l') {
                letter = 'll';
                i++;
            } else if (letter === 'r' && i < word.length - 1 && word[i + 1].toLowerCase() === 'r') {
                letter = 'rr';
                i++;
            } else if (letter === 'c' && i < word.length - 1 && word[i + 1].toLowerCase() === 'h') {
                letter = 'ch';
                i++;
            }
            
            else if (noAccents[letter]) {
                letter = noAccents[letter];
            }
            if (scores[letter] === undefined) {
                valid = false;
                break;
            }
            score += scores[letter];
            i++;
        }
        result.push(valid ? score : undefined);
    }

    return result;
}

// Ejemplos de uso
console.log(getScore([])); // Devuelve []
console.log(getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón'])); // Devuelve [undefined, 12, 11, undefined, 5]
console.log(getScore(['Hola', 'me', 'llamo', 'Jose', 'chao'])); // Devuelve [7, 4, 13, 11, 7]
