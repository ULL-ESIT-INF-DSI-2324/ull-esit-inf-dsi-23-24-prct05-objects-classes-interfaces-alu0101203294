import 'mocha';
import { expect } from 'chai';
import { Dish } from '../../src/Ejercicio-2/dish';
import { MenuInstance } from '../../src/Ejercicio-2/menuinstance';
import { NutritionalValueStrategy } from '../../src/Ejercicio-2/strategy1';
import { Solver } from '../../src/Ejercicio-2/solver';
import { UnhealthyScoreStrategy } from '../../src/Ejercicio-2/strategy2';
import { NutritionalUnhealthyRatioStrategy } from '../../src/Ejercicio-2/strategy3';

describe ('Ejercicio 2 - Strategy Pattern', () => {
    const dishes: Dish[] = [
        { nutriScore: 10, unhealthyScore: 2 },
        { nutriScore: 8, unhealthyScore: 3 },
        { nutriScore: 7, unhealthyScore: 4 },
        { nutriScore: 9, unhealthyScore: 1 },
        { nutriScore: 7, unhealthyScore: 9 },
        { nutriScore: 6, unhealthyScore: 9 }, 
    ];

    const menuInstance = new MenuInstance(dishes, 8);

    it('NutritionalValueStrategy', () => {
        const nutritionalValueStrategy = new NutritionalValueStrategy();
        const solver1 = new Solver(nutritionalValueStrategy);
        const menuSolution1 = solver1.solve(menuInstance);
        expect(menuSolution1.selectedDishes.length).to.equal(4);
        expect(menuSolution1.selectedDishes[0].nutriScore).to.equal(10);
        expect(menuSolution1.selectedDishes[1].nutriScore).to.equal(9);
    });

    it('UnhealthyScoreStrategy', () => {
        const unhealthyScoreStrategy = new UnhealthyScoreStrategy();
        const solver2 = new Solver(unhealthyScoreStrategy);
        const menuSolution2 = solver2.solve(menuInstance);
        expect(menuSolution2.selectedDishes.length).to.equal(4);
        expect(menuSolution2.selectedDishes[0].unhealthyScore).to.equal(1);
        expect(menuSolution2.selectedDishes[1].unhealthyScore).to.equal(2);
    });

    it('NutritionalUnhealthyRatioStrategy', () => {
        const nutritionalUnhealthyRatioStrategy = new NutritionalUnhealthyRatioStrategy();
        const solver3 = new Solver(nutritionalUnhealthyRatioStrategy);
        const menuSolution3 = solver3.solve(menuInstance);
        expect(menuSolution3.selectedDishes.length).to.equal(4);
        expect(menuSolution3.selectedDishes[0].nutriScore).to.equal(9);
        expect(menuSolution3.selectedDishes[1].nutriScore).to.equal(10);
    });
});