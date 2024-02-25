import { ElementoBibliografico } from './interfaces';
/**
 * Clase abstracta para definir un formato de referencia
 * Define una clase abstracta FormatoReferencia que define un método abstracto generarReferencia que recibe un elemento bibliográfico y devuelve una cadena con la referencia bibliográfica en un formato concreto.
 */
export abstract class FormatoReferencia {
  abstract generarReferencia(elemento: ElementoBibliografico): string;
}
