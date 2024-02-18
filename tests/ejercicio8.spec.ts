import 'mocha';
import { expect } from 'chai';
import { getPaths } from '../src/ejercicio8';

describe ('getPaths function', () => {
    it('Should return the paths of a matrix', () => {
        expect(getPaths(3, 2, [[0, 1], [2, 3], [4, 5]])).to.be.deep.equal([ [ 0, 1, 3, 5 ], [ 0, 2, 3, 5 ], [ 0, 2, 4, 5 ] ]);
    });

});