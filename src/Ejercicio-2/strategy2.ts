import { MenuInstance } from './menuinstance';
import { MenuSolution } from './menusolution';
import { Strategy } from './strategy';

/**
 * Clase UnhealthyScoreStrategy que implementa la interfaz Strategy
 * @class UnhealthyScoreStrategy
 * @constructor
 * @method selectMenu - Método para seleccionar platos para el menú utilizando la estrategia de insalubridad
 */
export class UnhealthyScoreStrategy implements Strategy {
    selectMenu(menuInstance: MenuInstance): MenuSolution {
        const sortedDishes = menuInstance.dishes.sort((a, b) => a.unhealthyScore - b.unhealthyScore);
        //console.log('Platos ordenados:', sortedDishes); // Verificar los platos ordenados
        const menuSolution = new MenuSolution();

        for (const dish of sortedDishes) {
            //console.log('Plato actual:', dish); // Verificar el plato actual

            // Verificar si el plato actual supera el máximo permitido de insalubridad
            if (dish.unhealthyScore > menuInstance.maxUnhealthyScore) {
                // Si es así, detener la selección de platos
                break;
            }

            // Agregar el plato al menú seleccionado
            menuSolution.addDish(dish);
        }

        return menuSolution;
    }
}