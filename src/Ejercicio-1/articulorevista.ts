import { FormatoReferencia } from './abstracts';
import { ElementoBibliografico } from './interfaces';

// Clase concreta para generar referencias en formato IEEE para artículos de revista
export class IEEEArticuloRevista extends FormatoReferencia {
  generarReferencia(elemento: ElementoBibliografico): string {
    const autores = elemento.autores.join(', ');
    const referencia = `${autores}, '${elemento.titulo}', ${elemento.editorial}, vol. ${elemento.volumen}, no. ${elemento.numero}, pp. ${elemento.paginas}, ${elemento.fechaPublicacion.getFullYear()}, N.º de artículo ${elemento.numeroArticulo}, ISSN ${elemento.issn}.`;
    return referencia;
  }
}
