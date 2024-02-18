import 'mocha';
import { expect } from 'chai';
import { append, length1, reverse, concatenar, reduce, map } from '../src/ejercicio9';

describe ('append function', () => {
    it('Should return the append of two lists', () => {
        expect(append([1, 2, 3], [4, 5])).to.be.deep.equal([1, 2, 3, 4, 5]);
    });
});

describe ('length1 function', () => {
    it('Should return the length of a list', () => {
        expect(length1([1, 2, 3])).to.be.equal(3);
    });
});

describe ('reverse function', () => {
    it('Should return the reverse of a list', () => {
        expect(reverse([1, 2, 3])).to.be.deep.equal([3, 2, 1]);
    });
});

describe ('concatenar function', () => {
    it('Should return the concatenation of a list of lists', () => {
        expect(concatenar([[1, 2, 3], [4, 5]])).to.be.deep.equal([1, 2, 3, 4, 5]);
    });
});

describe ('reduce function', () => {
    it('Should return the reduction of a list', () => {
        expect(reduce((accum, item) => accum + item, [1, 2, 3], 10)).to.be.equal(16);
    });
});

describe ('map function', () => {
    it('Should return the mapped list', () => {
        expect(map((item) => item * 2, [1, 2, 3])).to.be.deep.equal([2, 4, 6]);
    });
});

