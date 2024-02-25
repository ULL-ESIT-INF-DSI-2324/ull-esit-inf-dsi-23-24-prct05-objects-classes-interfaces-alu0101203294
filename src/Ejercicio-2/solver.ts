import { MenuInstance } from './menuinstance';
import { MenuSolution } from './menusolution';
import { Strategy } from './strategy';

/**
 * Clase Solver que utiliza las estrategias para resolver el problema
 * @class Solver
 * @constructor
 * @method solve - Método para resolver el problema utilizando una estrategia concreta
 */
export class Solver {
    constructor(public strategy: Strategy) {}

    solve(menuInstance: MenuInstance): MenuSolution {
        return this.strategy.selectMenu(menuInstance);
    }
}