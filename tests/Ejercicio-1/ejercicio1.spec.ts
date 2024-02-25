import 'mocha';
import { expect } from 'chai';
import { ElementoBibliografico } from '../../src/Ejercicio-1/interfaces';
import { TipoElemento } from '../../src/Ejercicio-1/enums';
import { GestorReferenciasBibliograficas } from '../../src/Ejercicio-1/gestorreferencias';


describe ('Ejercicio 1 - Gestor de referencias bibliográficas', () => {
    const gestorReferencias = new GestorReferenciasBibliograficas();
    
    it('Debería generar la referencia de un artículo de revista', () => {
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
        gestorReferencias.agregarElemento(articuloRevista); // Agregar el elemento al gestor
        const referencias = gestorReferencias.exportarEnIEEE('Palabra1'); // Modificar la palabra clave según corresponda
        expect(referencias).to.be.an('array');
        expect(referencias).to.have.lengthOf.above(0); // Verificar que se haya generado al menos una referencia
        referencias.forEach((referencia) => {
            expect(referencia).to.be.a('string'); // Verificar que cada referencia sea una cadena de texto
        });
    });
    
    it('Debería generar la referencia de un capítulo de libro', () => {
        const capituloLibro: ElementoBibliografico = {
            tipo: TipoElemento.CapituloLibro,
            titulo: 'Título del libro',
            autores: ['Autor del capítulo'],
            palabrasClave: ['Palabra1', 'Palabra99'],
            resumen: 'Resumen del capítulo',
            fechaPublicacion: new Date('2023-01-01'),
            paginas: 20,
            editorial: 'Editorial B',
            tituloCapitulo: 'Título del capítulo',
            ciudadEdicion: 'Ciudad',
            numeroEdicion: '1ª ed.',
            isbn: '1234567890',
        };
        gestorReferencias.agregarElemento(capituloLibro); // Agregar el elemento al gestor
        const referencias = gestorReferencias.exportarEnIEEE('Palabra99'); // Modificar la palabra clave según corresponda
        expect(referencias).to.be.an('array');
        expect(referencias).to.have.lengthOf.above(0); // Verificar que se haya generado al menos una referencia
        referencias.forEach((referencia) => {
            expect(referencia).to.be.a('string'); // Verificar que cada referencia sea una cadena de texto
        });
    });

});
