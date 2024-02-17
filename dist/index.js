"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
/**
 * Adds two numbers
 * @param first Consists of the first number
 * @param second Consists of the second number
 * @returns The addition of the two numbers `first` and `second`
 * ```typescript
 * add(1, 7) // 8
 * ```
 */
function add(first, second) {
    return first + second;
}
exports.add = add;
console.log(`add(1, 7): ${add(1, 7)}`); // 3
