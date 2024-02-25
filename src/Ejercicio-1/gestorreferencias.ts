import { FormatoReferencia } from './abstracts';
import { ElementoBibliografico } from './interfaces';
import { TipoElemento } from './enums';
import { IEEEArticuloRevista } from './articulorevista';
import { IEEECapituloLibro } from './capitulolibro';
import { IEEETrabajoFinGrado } from './tfg';
import { IEEETrabajoFinMaster } from './tfm';

// Clase para gestionar el gestor de referencias bibliográficas
export class GestorReferenciasBibliograficas {
  private elementos: ElementoBibliografico[] = [];

  // Método para agregar un elemento bibliográfico
  agregarElemento(elemento: ElementoBibliografico) {
    this.elementos.push(elemento);
  }

  // Método para mostrar la información almacenada en formato tabla
  mostrarInformacion() {
    console.table(this.elementos);
  }

  // Método para buscar elementos bibliográficos por palabras clave y mostrar resultados en formato de tabla
  buscarPorPalabrasClave(palabraClave: string) {
    const resultados = this.elementos.filter((elemento) =>
      elemento.palabrasClave.includes(palabraClave),
    );
    console.table(resultados);
  }

  // Método para exportar los resultados de una búsqueda en formato IEEE
  exportarEnIEEE(palabraClave: string): string[] {
    const resultados = this.elementos.filter((elemento) =>
        elemento.palabrasClave.includes(palabraClave),
    );

    const referencias: string[] = [];

    resultados.forEach((elemento) => {
        let formatoIEEE: FormatoReferencia;

        // Determinar el tipo de elemento y seleccionar el formato adecuado
        switch (elemento.tipo) {
            case TipoElemento.ArticuloRevista:
                formatoIEEE = new IEEEArticuloRevista();
                break;
            case TipoElemento.CapituloLibro:
                formatoIEEE = new IEEECapituloLibro();
                break;
            case TipoElemento.TrabajoFinGrado:
                formatoIEEE = new IEEETrabajoFinGrado();
                break;
            case TipoElemento.TrabajoFinMaster:
                formatoIEEE = new IEEETrabajoFinMaster();
                break;
            default:
                // Manejar el caso en el que el tipo de elemento no coincide con ningún formato conocido
                console.error('Error: Tipo de elemento desconocido');
                return;
        }

        referencias.push(formatoIEEE.generarReferencia(elemento));
    });

    return referencias;
}

}
