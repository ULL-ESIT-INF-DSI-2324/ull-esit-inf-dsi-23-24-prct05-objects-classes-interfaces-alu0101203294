import { MenuInstance } from './menuinstance';
import { MenuSolution } from './menusolution';
import { Strategy } from './strategy';
// Clase Solver que utiliza las estrategias para resolver el problema
export class Solver {
    constructor(public strategy: Strategy) {}

    solve(menuInstance: MenuInstance): MenuSolution {
        return this.strategy.selectMenu(menuInstance);
    }
}