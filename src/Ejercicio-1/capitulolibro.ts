import { FormatoReferencia } from './abstracts';
import { ElementoBibliografico } from './interfaces';

// Clase concreta para generar referencias en formato IEEE para capítulos de libros
export class IEEECapituloLibro extends FormatoReferencia {
  generarReferencia(elemento: ElementoBibliografico): string {
    const autores = elemento.autores.join(', ');
    const referencia = `${autores}, '${elemento.titulo}', ${elemento.tituloCapitulo || 'Título del libro'}, ${elemento.editorial}, ${elemento.ciudadEdicion || 'Ciudad'}, ${elemento.numeroEdicion || 'Nº edición'}, pp. ${elemento.paginas}, ${elemento.fechaPublicacion.getFullYear()}, ISBN ${elemento.isbn || 'No disponible'}.`;
    return referencia;
  }
}
