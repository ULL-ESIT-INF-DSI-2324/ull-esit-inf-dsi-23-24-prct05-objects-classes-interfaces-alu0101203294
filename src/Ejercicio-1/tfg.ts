import { FormatoReferencia } from './abstracts';
import { ElementoBibliografico } from './interfaces';

// Clase concreta para generar referencias en formato IEEE para trabajos de fin de grado
export class IEEETrabajoFinGrado extends FormatoReferencia {
  generarReferencia(elemento: ElementoBibliografico): string {
    const autores = elemento.autores.join(', ');
    const referencia = `${autores}, '${elemento.titulo}', ${elemento.claseDocumento || 'Trabajo de fin de grado'}, ${elemento.departamento || 'Departamento'}, ${elemento.institucionAcademica || 'Institución académica (abreviada)'}, ${elemento.ciudad || 'Ciudad'}, ${elemento.fechaPublicacion.getFullYear()}.`;
    return referencia;
  }
}
