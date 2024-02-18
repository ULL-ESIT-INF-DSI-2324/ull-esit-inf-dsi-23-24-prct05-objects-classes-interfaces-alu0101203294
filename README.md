# **Desarrollo de Sistemas Informáticos**

## Grado en Ingeniería Informática - Universidad de La Laguna

### Práctica 4 - Arrays, tuplas y enumerados

##### José Miguel Díaz González

Práctica en la que resolveremos los 10 ejercicios de programación propuestos relacionados con **Arrays, tuplas y enumerados**.

#### Introducción - Aprendizaje

En TypeScript, la capacidad de definir tipos personalizados y estructuras de datos complejas mediante tuplas proporciona una vía clara y segura para representar datos dentro de los programas.
Los enumerados en TypeScript ofrecen una forma eficaz de definir conjuntos de constantes con nombres legibles.
Ademas,existe una amplia variedad de métodos para operar con arrays como `map`, `filter`, `reduce`... Estos métodos ofrecen la posibilidad de transformar, filtrar y reducir conjuntos de datos de manera eficiente.

---

Los ejercios propuestos para esta práctica son:

1. [Ejercicio 1](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_1___N_meros_racionales.html) - Números racionales

   Definir un tipo de datos para representar números racionales como pares de valores numéricos, implementar funciones para operaciones como calcular el valor absoluto, obtener el inverso multiplicativo, sumar, restar, multiplicar y dividir estos racionales. Asegurar que todas las funciones devuelvan los resultados en su forma más reducida, simplificando los racionales utilizando una función para calcular el máximo común divisor de los numeradores y denominadores. Esto garantiza que los resultados estén expresados con los valores mínimos posibles.
2. [Ejercicio 2](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_2___Se_ales_corporales.html) - Señales corporales

   Convertir un número entero positivo en una lista de señales corporales, según un conjunto predefinido de señales. Cada señal corporal se asigna a un valor numérico específico. La función debe manejar correctamente los casos en los que el número recibido como argumento no es un entero positivo, devolviendo undefined.
3. [Ejercicio 3](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_3___Scrabble.html) - Scrabble

   Crea una función llamada getScore que calcule la puntuación de una lista de palabras en español en el juego Scrabble basándose en un sistema de puntuación predefinido para cada letra. Esta función debe reemplazar las letras acentuadas con sus correspondientes letras sin acento y devolver una lista de puntos numéricos para cada palabra en la lista de entrada. Si una palabra contiene una letra no permitida, la función debe devolver un valor indefinido para esa palabra. Se asigna un valor numérico a cada letra Por ejemplo, la letra A vale 1 punto y la letra Z vale 10 puntos. La función debe utilizar estas reglas para calcular la puntuación de cada palabra en la lista de entrada y devolver la lista de puntuaciones correspondiente.
4. [Ejercicio 4](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_4___Recolecci_n_de_objetos.html) - Recolección de objetos

   Crear una función llamada getPoints para calcular los puntos ganados por un jugador al completar una fase de un juego. Los puntos dependen de la fase completada y de los objetos recolectados durante la misma, siguiendo este algoritmo:

   * Calcular los múltiplos de cada objeto recolectado que sean menores que la fase completada.
   * Combinar todas las listas de múltiplos en una única lista.
   * Eliminar los duplicados de la lista combinada.
   * Sumar los elementos únicos de la lista combinada y devolverlo
5. [Ejercicio 5](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_5___Tablas_de_multiplicar.html) - Tablas de multiplicar

   Crear una función llamada productTable que reciba como parámetro un número N mayor o igual a 1 y devuelva un array de arrays con N tablas de multiplicar, donde cada tabla de multiplicar contiene los primeros N productos. En caso de que el argumento no sea correcto, la función debe devolver undefined.
6. [Ejercicio 6](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_6___Factor_a_de_multiplicaciones.html) - Factoría de multiplicaciones

   Crear una función llamada multiplyAll que tome como parámetro un array de números y devuelva otra función. Esta segunda función tomará un único valor numérico como argumento y devolverá un nuevo array que es el resultado de multiplicar cada número del array original por el valor numérico proporcionado.
7. [Ejercicio 7](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_7___El_Cartesiano.html) - El Cartesiano

   Crear una función llamada getCartesianPath que tome como argumento un array de letras que representan las direcciones del paseo generado por la aplicación y un número entero n que representa el tiempo disponible. La función deberá devolver verdadero si el paseo se puede completar exactamente en n minutos, considerando que cada bloque se recorre en un minuto y que queremos regresar al punto de partida. De lo contrario, la función deberá devolver falso. En caso de recibir argumentos no válidos, como un array vacío, la función deberá devolver undefined.
8. [Ejercicio 8](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_8___Todos_los_caminos_llevan_a_Roma.html) - Todos los caminos llevan a Roma

   Crear una función llamada getPaths que tome como argumento una matriz de tamaño N x M, donde N representa el número de filas y M el número de columnas. La función debe devolver una lista de todos los posibles caminos que llevan desde la esquina superior izquierda de la matriz a la esquina inferior derecha, moviéndose solo hacia abajo en el número de filas o hacia la derecha en el número de columnas. Cada camino debe ser representado como una lista con las componentes de la matriz visitadas durante el mismo.
9. [Ejercicio 9](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/Ejercicio_9___Operaciones_con_listas.html) - Operaciones con listas

   Este ejercicio consiste en implementar un conjunto de operaciones sobre listas, incluyendo append (añadir elementos de una lista a otra), concatenate (combinar listas en una única lista), filter (obtener elementos que cumplan un predicado), length (obtener la longitud de una lista), map (aplicar una función a todos los elementos de una lista), reduce (reducir elementos de una lista aplicando una función acumuladora) y reverse (obtener una lista con elementos en orden inverso)
10. [Ejercicio 10](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/modules/ejercicio10.html) - Menús saludables

    Crear un conjunto de funciones para automatizar la creación de un menú saludable a partir de una lista de platos con información sobre su valor nutricional y grado de insalubridad. Seleccionar los platos más nutritivos primero, elegir los menos insalubres o priorizar los platos con la mejor relación entre valor nutricional y grado de insalubridad. El objetivo es maximizar el valor nutricional del menú sin exceder un límite de insalubridad predefinido.

---

#### Conclusiones

Tras realizar esta practica, he reforzado mi conocimiento en TypeScript, especialmente en el manejo de arrays, tuplas y enumerados. Ademas aprendido buenas prácticas como la metodología de Desarrollo Dirigido por Pruebas (TDD) y la documentación de código (con Typedoc), lo que me permite escribir código más limpio. También he conocido el uso de herramientas como Typedoc, Mocha y Chai, lo que me hace más eficiente en la generación de documentación y pruebas automatizadas.

---

#### Referencias

[TypeDoc Example](https://typedoc.org/example/index.html)

[Tags | TypeDoc](https://typedoc.org/guides/tags/)

[Mocha](https://mochajs.org/)

[Assertion Styles - Chai](https://www.chaijs.com/guide/styles/)

[typedoc - npm](https://www.npmjs.com/package/typedoc)

---

[Informe en Github Pages](https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct04-arrays-tuples-enums-alu0101203294/)

[Guión de la Práctica](https://ull-esit-inf-dsi-2324.github.io/prct04-arrays-tuples-enums/)
