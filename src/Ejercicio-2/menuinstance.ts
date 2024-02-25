import { Dish } from './dish';
/**
 * Clase que representa una instancia del problema (conjunto de platos con su valor nutricional y puntuación de insalubridad)
 * @class MenuInstance
 * @constructor
 * 
 */

export class MenuInstance {
    constructor(public dishes: Dish[], public maxUnhealthyScore: number) {}
}