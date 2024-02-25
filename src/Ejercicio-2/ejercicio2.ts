import { Dish } from './dish';
import { MenuInstance } from './menuinstance';
import { NutritionalValueStrategy } from './strategy1';
import { Solver } from './solver';
import { UnhealthyScoreStrategy } from './strategy2';
import { NutritionalUnhealthyRatioStrategy } from './strategy3';
// Crear algunos platos de ejemplo
const dishes: Dish[] = [
    { nutriScore: 10, unhealthyScore: 2 },
    { nutriScore: 8, unhealthyScore: 3 },
    { nutriScore: 7, unhealthyScore: 4 },
    { nutriScore: 9, unhealthyScore: 1 },
    { nutriScore: 7, unhealthyScore: 9 },
    { nutriScore: 6, unhealthyScore: 9 }, 
];

// Crear una instancia del problema (conjunto de platos y restricción de insalubridad máxima)
const menuInstance = new MenuInstance(dishes, 8);

// Crear una instancia del Solver con la estrategia de selección por valor nutricional decreciente
const nutritionalValueStrategy = new NutritionalValueStrategy();
const solver1 = new Solver(nutritionalValueStrategy);

// Resolver el problema utilizando la primera estrategia
const menuSolution1 = solver1.solve(menuInstance);

console.log('Menú seleccionado por valor nutricional decreciente:');
menuSolution1.selectedDishes.forEach((dish, index) => {
    console.log(`Plato ${index + 1}: NutriScore: ${dish.nutriScore}, UnhealthyScore: ${dish.unhealthyScore}`);
});


// Crear una instancia del Solver con la estrategia de selección por grado de insalubridad creciente
const unhealthyScoreStrategy = new UnhealthyScoreStrategy();
const solver2 = new Solver(unhealthyScoreStrategy);

// Resolver el problema utilizando la segunda estrategia
const menuSolution2 = solver2.solve(menuInstance);

console.log('Menú seleccionado por grado de insalubridad creciente:');
menuSolution2.selectedDishes.forEach((dish, index) => {
    console.log(`Plato ${index + 1}: NutriScore: ${dish.nutriScore}, UnhealthyScore: ${dish.unhealthyScore}`);
});


// Crear una instancia del Solver con la estrategia de selección por ratio valor nutricional / grado de insalubridad decreciente
const nutritionalUnhealthyRatioStrategy = new NutritionalUnhealthyRatioStrategy();
const solver3 = new Solver(nutritionalUnhealthyRatioStrategy);

// Resolver el problema utilizando la tercera estrategia
const menuSolution3 = solver3.solve(menuInstance);

console.log('Menú seleccionado por ratio valor nutricional / grado de insalubridad decreciente:');
menuSolution3.selectedDishes.forEach((dish, index) => {
    console.log(`Plato ${index + 1}: NutriScore: ${dish.nutriScore}, UnhealthyScore: ${dish.unhealthyScore}`);
});

