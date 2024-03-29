import { MenuInstance } from './menuinstance';
import { MenuSolution } from './menusolution';
import { Strategy } from './strategy';

/**
 * Clase NutritionalUnhealthyRatioStrategy que implementa la interfaz Strategy
 * @class Nutritional
 * @constructor
 * @method selectMenu - Método para seleccionar platos para el menú utilizando la estrategia de ratio valor nutricional / grado de insalubridad
 */
export class NutritionalUnhealthyRatioStrategy implements Strategy {
    selectMenu(menuInstance: MenuInstance): MenuSolution {
        const sortedDishes = menuInstance.dishes
            .sort((a, b) => (b.nutriScore / b.unhealthyScore) - (a.nutriScore / a.unhealthyScore));
        //console.log('Platos ordenados por ratio:', sortedDishes); // Verificar los platos ordenados
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