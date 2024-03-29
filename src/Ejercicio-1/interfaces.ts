import { TipoElemento } from './enums';
/**
 * Interfaz para definir la estructura básica de un elemento bibliográfico
 * Define una interfaz ElementoBibliografico con los atributos comunes a todos los elementos bibliográficos.
 * @interface ElementoBibliografico
 * 
 */

export interface ElementoBibliografico {
  tipo: TipoElemento;
  titulo: string;
  autores: string[];
  palabrasClave: string[];
  resumen: string;
  fechaPublicacion: Date;
  paginas: number;
  editorial: string;
  volumen?: string;
  numero?: string;
  numeroArticulo?: string;
  issn?: string;
  tituloCapitulo?: string;
  ciudadEdicion?: string;
  numeroEdicion?: string;
  isbn?: string;
  claseDocumento?: string;
  departamento?: string;
  institucionAcademica?: string;
  ciudad?: string;
}
