import 'mocha';
import { expect } from 'chai';
import {getScore} from '../src/ejercicio3';

describe ('getScore function', () => {
    it('Should return the score', () => {
        expect(getScore(['kilo', 'almendras', 'llano', 'wenceslao', 'ratón'])).to.be.deep.equal([undefined, 12, 11, undefined, 5]);
        expect(getScore(['Hola', 'me', 'llamo', 'Jose', 'chao'])).to.be.deep.equal([7, 4, 13, 11, 7]);
        expect(getScore([])).to.be.deep.equal([]);
    });
});