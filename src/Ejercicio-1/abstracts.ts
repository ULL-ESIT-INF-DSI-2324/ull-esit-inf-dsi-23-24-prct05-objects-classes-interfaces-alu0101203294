import { ElementoBibliografico } from './interfaces';
// Clase abstracta para definir un formato de referencia
export abstract class FormatoReferencia {
  abstract generarReferencia(elemento: ElementoBibliografico): string;
}
