import { MenuInstance } from './menuinstance';
import { MenuSolution } from './menusolution';

/**
 * @interface Strategy
 * Interfaz para representar una estrategia para seleccionar platos para el menú
 */
export interface Strategy {
    selectMenu(menuInstance: MenuInstance): MenuSolution;
}