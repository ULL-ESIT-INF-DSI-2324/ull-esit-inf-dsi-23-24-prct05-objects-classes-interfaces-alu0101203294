import { Dish } from './dish';
/**
 * Clase que representa una solución al problema (conjunto de platos seleccionados para el menú)
 * @class MenuSolution
 * @constructor
 * @method addDish - Método para agregar un plato seleccionado al menú
 * @method totalUnhealthyScore - Método para calcular la suma total de la puntuación de insalubridad de todos
 */

export class MenuSolution {
    constructor(public selectedDishes: Dish[] = []) {}

    // Método para agregar un plato seleccionado al menú
    addDish(dish: Dish): void {
        this.selectedDishes.push(dish);
    }

    // Método para calcular la suma total de la puntuación de insalubridad de todos los platos en el menú
    totalUnhealthyScore(): number {
        return this.selectedDishes.reduce((acc, cur) => acc + cur.unhealthyScore, 0);
    }
}