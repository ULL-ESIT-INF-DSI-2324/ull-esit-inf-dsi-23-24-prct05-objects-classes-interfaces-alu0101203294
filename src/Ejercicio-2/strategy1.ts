import { MenuInstance } from './menuinstance';
import { MenuSolution } from './menusolution';
import { Strategy } from './strategy';
// Clase para la primera heurística: seleccionar platos por valor nutricional decreciente
export class NutritionalValueStrategy implements Strategy {
    selectMenu(menuInstance: MenuInstance): MenuSolution {
        const sortedDishes = menuInstance.dishes.slice().sort((a, b) => b.nutriScore - a.nutriScore);
        const menuSolution = new MenuSolution();

        for (const dish of sortedDishes) {
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