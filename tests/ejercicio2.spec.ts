import 'mocha';
import { expect } from 'chai';
import {fromIntToActions} from '../src/ejercicio2';

describe('fromIntToActions function', () => {
    it('Should return the actions', () => {
        expect(fromIntToActions(192)).to.be.deep.equal(['Agacharse', 'Dar un aplauso']);
        expect(fromIntToActions(129)).to.be.deep.equal(['Parpadear', 'Dar un aplauso']);
        expect(fromIntToActions(257)).to.be.deep.equal(['Parpadear']);
        expect(fromIntToActions(256)).to.be.deep.equal([]);
        expect(fromIntToActions(515)).to.be.deep.equal(['Parpadear', 'Parpadear dos veces']);
        expect(fromIntToActions(84)).to.be.deep.equal(['Mover la nariz', 'Saltar', 'Agacharse']);
    });

    it('Should return undefined when the input is not a positive integer/zero/decimal', () => {
        expect(fromIntToActions(-14)).to.be.undefined;
        expect(fromIntToActions(0)).to.be.undefined;
        expect(fromIntToActions(3.14)).to.be.undefined;
    });
});