import 'mocha';
import { expect } from 'chai';
import { getCartesianPath } from '../src/ejercicio7';

describe ('getCartesianPath function', () => {
    it('Should return true or false if the ride that the application has given us can be done', () => {
        expect(getCartesianPath(['n', 's', 'e', 'o'], 4)).to.be.true;
        expect(getCartesianPath(['n', 's', 'e', 'o'], 5)).to.be.false;
        expect(getCartesianPath(['n', 's', 'e', 'o', 'n', 's'], 6)).to.be.true;
        expect(getCartesianPath([], 5)).to.be.undefined;
    });
});