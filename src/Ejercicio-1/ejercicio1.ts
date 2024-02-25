/**
 * @module Ejercicio-1 
 * @summary
 * 
 * Este primer ejercicio plantea la creación de un gestor de referencias bibliográficas en TypeScript. Se requiere diseñar e implementar un conjunto de clases e interfaces que permitan gestionar información sobre diferentes tipos de elementos bibliográficos, como artículos de revista, capítulos de libros, trabajos de fin de grado y trabajos de fin de máster.
 * En este ejercicio, se proporciona un esquema básico que consta de una interfaz ElementoBibliografico que define la estructura común de todos los elementos bibliográficos y clases concretas que extienden la clase abstracta FormatoReferencia para generar referencias en formato IEEE específicas para cada tipo de elemento bibliográfico.
 * La clase GestorReferenciasBibliograficas se encarga de gestionar los elementos bibliográficos, permitiendo agregar nuevos elementos, mostrar la información almacenada en formato de tabla, buscar elementos por palabras clave y exportar los resultados de una búsqueda en formato IEEE.
 * Incluye ejemplos de uso, donde se crean instancias concretas de diferentes tipos de elementos bibliográficos (artículo de revista, capítulo de libro, trabajo de fin de grado y trabajo de fin de máster), se agregan al gestor de referencias y se realizan búsquedas y exportaciones en formato IEEE.
 */
import { ElementoBibliografico } from './interfaces';
import { TipoElemento } from './enums';
import { GestorReferenciasBibliograficas } from './gestorreferencias';
// Ejemplo de uso
const gestorReferencias = new GestorReferenciasBibliograficas();

// Definir instancias concretas de elementos bibliográficos
const articuloRevista: ElementoBibliografico = {
  tipo: TipoElemento.ArticuloRevista,
  titulo: 'Título del artículo',
  autores: ['Autor1', 'Autor2'],
  palabrasClave: ['Palabra1', 'Palabra2'],
  resumen: 'Resumen del artículo',
  fechaPublicacion: new Date('2023-01-01'),
  paginas: 10,
  editorial: 'Editorial A',
  volumen: 'Vol. 1',
  numero: 'Núm. 1',
  numeroArticulo: 'Artículo 1',
  issn: '1234-5678',
};

const capituloLibro: ElementoBibliografico = {
  tipo: TipoElemento.CapituloLibro,
  titulo: 'Título del libro',
  autores: ['Autor del capítulo'],
  palabrasClave: ['Palabra1', 'Palabra9'],
  resumen: 'Resumen del capítulo',
  fechaPublicacion: new Date('2023-01-01'),
  paginas: 20,
  editorial: 'Editorial B',
  tituloCapitulo: 'Título del capítulo',
  ciudadEdicion: 'Ciudad',
  numeroEdicion: '1ª ed.',
  isbn: '1234567890',
};

const trabajoFinGrado: ElementoBibliografico = {
  tipo: TipoElemento.TrabajoFinGrado,
  titulo: 'Título del trabajo de fin de grado',
  autores: ['Autor5'],
  palabrasClave: ['Palabra3', 'Palabra9'],
  resumen: 'Resumen del trabajo de fin de grado',
  fechaPublicacion: new Date('2023-01-01'),
  paginas: 30,
  editorial: 'Editorial C',
  claseDocumento: 'Trabajo de fin de grado',
  departamento: 'Departamento de Ingeniería',
  institucionAcademica: 'Universidad ABC',
  ciudad: 'Ciudad La Laguna',
};

const trabajoFinMaster: ElementoBibliografico = {
  tipo: TipoElemento.TrabajoFinMaster,
  titulo: 'Título del trabajo de fin de máster',
  autores: ['Autor6'],
  palabrasClave: ['Palabra6', 'Palabra99'],
  resumen: 'Resumen del trabajo de fin de máster',
  fechaPublicacion: new Date('2023-01-01'),
  paginas: 40,
  editorial: 'Editorial D',
  claseDocumento: 'Trabajo de fin de máster',
  departamento: 'Departamento de Ciencias',
  institucionAcademica: 'Universidad La Laguna',
  ciudad: 'Ciudad La Laguna',
};

// Agregar elementos al gestor
gestorReferencias.agregarElemento(articuloRevista);
gestorReferencias.agregarElemento(capituloLibro);
gestorReferencias.agregarElemento(trabajoFinGrado);
gestorReferencias.agregarElemento(trabajoFinMaster);

// Realizar la búsqueda por palabras clave y exportación en IEEE
gestorReferencias.buscarPorPalabrasClave('Palabra99');
const referenciasIEEE = gestorReferencias.exportarEnIEEE('Palabra99');
console.log(referenciasIEEE);
