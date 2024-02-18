import 'mocha';
import { expect } from 'chai';
import { multiplyAll } from '../src/ejercicio6';

describe ('multiplyAll function', () => {
    it('Should return the multiplication of all the elements in the array', () => {
        expect(multiplyAll([2, 6, 8])(3)).to.deep.equal([6, 18, 24]);
        expect(multiplyAll([])(3)).to.deep.equal([]);
    });

});