import 'mocha';
import { expect } from 'chai';
import { productTable } from '../src/ejercicio5';

describe ('productTable function', () => {
    it('Should return the product table of a number', () => {
        expect(productTable(2)).to.be.deep.equal([[1, 2], [2, 4]]);
        expect(productTable(3)).to.be.deep.equal([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
        expect(productTable(4)).to.be.deep.equal([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
    });

    it('Should return undefined when the input is less than 1', () => {
        expect(productTable(-1)).to.be.equal(undefined);
        expect(productTable(0)).to.be.equal(undefined);
    });

    it('Should return undefined when the input is not an integer', () => {
        expect(productTable(1.5)).to.be.equal(undefined);
    });
});