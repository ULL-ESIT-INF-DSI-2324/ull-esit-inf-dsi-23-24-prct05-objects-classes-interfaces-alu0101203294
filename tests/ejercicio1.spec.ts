import 'mocha';
import { expect } from 'chai';
import { mcd, simplificarRacional, abs, inv, add, sub, mult, div } from '../src/ejercicio1';

describe('mcd function', () => {
    it('Should return the greatest common divisor of two numbers', () => {
        expect(mcd(12, 8)).to.be.equal(4);
        expect(mcd(17, 23)).to.be.equal(1);
        expect(mcd(36, 48)).to.be.equal(12);
    });
});

describe('simplificarRacional function', () => {
    it('Should simplify a rational number', () => {
        expect(simplificarRacional([12, 8])).deep.equal([3, 2]);
        expect(simplificarRacional([17, 23])).deep.equal([17, 23]);
        expect(simplificarRacional([36, 48])).deep.equal([3, 4]);
    });
});

describe('abs function', () => {
    it('Should return the absolute value of a rational number', () => {
        expect(abs([12, 8])).deep.equal([3, 2]);
        expect(abs([-17, 23])).deep.equal([17, 23]);
        expect(abs([-36, -48])).deep.equal([3, 4]);
    });


});

describe('inv function', () => {
    it('Should return the multiplicative inverse of a rational number', () => {
        expect(inv([12, 8])).to.deep.equal([2, 3]);
        expect(inv([17, 23])).to.deep.equal([23, 17]);
    });

    it('Should throw an error when the input is 0', () => {
        expect(() => inv([0, 8])).to.throw('No se puede calcular el inverso multiplicativo de 0.');
    });
});

describe('add function', () => {
    it('Should return the sum of two rational numbers', () => {
        expect(add([12, 8], [17, 23])).to.deep.equal([103, 46]);
        expect(add([1, 2], [1, 3])).to.deep.equal([5, 6]);
    });
});

describe('sub function', () => {
    it('Should return the difference of two rational numbers', () => {
        expect(sub([12, 8], [17, 23])).to.deep.equal([35, 46]);
        expect(sub([1, 2], [1, 3])).to.deep.equal([1, 6]);
    });
});

describe('mult function', () => {
    it('Should return the product of two rational numbers', () => {
        expect(mult([12, 8], [17, 23])).to.deep.equal([51, 46]);
        expect(mult([1, 2], [1, 3])).to.deep.equal([1, 6]);
    });
});

describe('div function', () => {
    it('Should return the division of two rational numbers', () => {
        expect(div([12, 8], [17, 23])).to.deep.equal([69, 34]);
        expect(div([1, 2], [1, 3])).to.deep.equal([3, 2]);
    });
});