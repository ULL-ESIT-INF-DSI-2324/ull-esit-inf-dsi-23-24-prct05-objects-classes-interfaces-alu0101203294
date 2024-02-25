# **Desarrollo de Sistemas Informáticos**

## Grado en Ingeniería Informática - Universidad de La Laguna

### Práctica 5 - Objetos, clases e interfaces

##### José Miguel Díaz González

#### Introducción - Aprendizaje / Dificultades

Esta tiene como objetivo principal fortalecer la comprensión y la habilidad en el uso de objetos, clases e interfaces en TypeScript. Se busca simular situaciones reales que requieren la aplicación de estos conceptos. Además de consoldidar los fundamentos de la Programación Orientada a Objetos (POO). Se tiene como propósito la aplicación de los principios SOLID de diseño de software. Asegurando el desarrollo de software robusto, mantenible y escalable.

Los ejercicios propuestos constan la creación de un gestor de referencias bibliográficas y del diseño de un sistema para la automatización de menús saludables. Cada uno de estos ejercicios requiere en su diseño e implementación un conjunto de clases e interfaces que trabajen conjuntamente para ofrecer una solución Además, se destaca la importancia de la estructuración del código, con el uso de directorios y ficheros independientes para cada ejercicio dentro del proyecto, y la documentación adecuada mediante TypeDoc.

Uno de los desafíos clave fue diseñar clases que cumplieran con las funcionalidades requeridas y los principios SOLID
También fue una dificultad la de optimizar la manipulación de datos complejos, especialmente en el ejercicio de menús saludables, ya que esto implica gestionar de una manera compleja los  arrays y objetos para la selección y evaluación de platos según criterios nutricionales.

---

Los ejercios propuestos para esta práctica son:

#### 1. [Ejercicio 1]() - Gestor de referencias bibliográficas

Este primer ejercicio plantea la creación de un gestor de referencias bibliográficas en TypeScript. Se requiere diseñar e implementar un conjunto de clases e interfaces que permitan gestionar información sobre diferentes tipos de elementos bibliográficos, como artículos de revista, capítulos de libros, trabajos de fin de grado y trabajos de fin de máster.

   En este ejercicio, se proporciona un esquema básico que consta de una interfaz ElementoBibliografico que define la estructura común de todos los elementos bibliográficos y clases concretas que extienden la clase abstracta FormatoReferencia para generar referencias en formato IEEE específicas para cada tipo de elemento bibliográfico.

La clase GestorReferenciasBibliograficas se encarga de gestionar los elementos bibliográficos, permitiendo agregar nuevos elementos, mostrar la información almacenada en formato de tabla, buscar elementos por palabras clave y exportar los resultados de una búsqueda en formato IEEE.

Incluye ejemplos de uso, donde se crean instancias concretas de diferentes tipos de elementos bibliográficos (artículo de revista, capítulo de libro, trabajo de fin de grado y trabajo de fin de máster), se agregan al gestor de referencias y se realizan búsquedas y exportaciones en formato IEEE.

#### 2. [Ejercicio 2]() - Menús saludables orientados a objetos

Solución orientada a objetos para automatizar el diseño de menús saludables. Se define una interfaz Dish para representar un plato con propiedades de valor nutricional e insalubridad. La clase MenuInstance encapsula un conjunto de platos y una restricción de insalubridad máxima. La clase MenuSolution representa una solución al problema con métodos para agregar platos y calcular la insalubridad total del menú. La clase Solver utiliza diferentes estrategias implementadas en las clases NutritionalValueStrategy, UnhealthyScoreStrategy y NutritionalUnhealthyRatioStrategy para resolver el problema de selección de platos. Cada estrategia se basa en criterios específicos, como valor nutricional o insalubridad, permitiendo flexibilidad en la resolución del problema.

#### 3. [Modificacion]() - Reinas que se atacan entre sí

Solución en la que se define un conjunto de tipos y una función en TypeScript para verificar si dos reinas en un tablero de ajedrez están en posición de ataque mutuo. Los tipos Piece y Board representan respectivamente los tipos de las piezas del tablero y el tablero en sí, donde 'N' representa una reina negra, 'B' una reina blanca y '-' una casilla vacía. La función checkAttack toma un tablero como entrada y devuelve true si las reinas están en posición de ataque mutuo, false si no lo están, y undefined si no se encuentran ambas reinas en el tablero. Se proporcionan ejemplos de uso con diferentes configuraciones de tablero, cada uno seguido de un resultado esperado.

---

#### Conclusiones

En conclusión, esta práctica ha sido fundamental para familiarizarnos con los conceptos de la Programación Orientada a Objetos en TypeScript. Hemos tenido la oportunidad de aplicar los principios SOLID a nuestros proyectos. A través de ejercicios prácticos como el diseño de menús saludables, hemos podido comprender la importancia y la utilidad de estos principios en situaciones reales y concretas.

---

#### Referencias

[SOLID principles using Typescript](https://samueleresca.net/solid-principles-using-typescript/)

[Principios SOLID](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-solid.html)

[Repaso a TypeScript: tipos y POO - Platzi](https://platzi.com/clases/2272-nestjs/37073-repaso-a-typescript-tipos-y-poo/)

[Objetos, clases e interfaces](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-objects-classes-interfaces.html)

[Principios SOLID ](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-solid.html)

[Patrones de diseño en TypeScript ](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-patterns.html)

---

[Informe en Github Pages](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-alu0101203294/)

[Guión de la Práctica](https://ull-esit-inf-dsi-2324.github.io/prct05-objects-classes-interfaces/)
