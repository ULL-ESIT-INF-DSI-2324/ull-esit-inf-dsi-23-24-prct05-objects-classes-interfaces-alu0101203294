import 'mocha';
import { expect } from 'chai';
import { getPoints } from '../src/ejercicio4';

describe ('getPoints function', () => {
    it('Should return the total points of a phase and objects', () => {
        expect(getPoints(25, [2, 3, 7])).to.be.equal(211);
        expect(getPoints(10, [3, 5])).to.be.equal(23);
    });

    it('Should return undefined when the phase is negative', () => {
        expect(getPoints(-25, [2, 3, 7])).to.be.equal(undefined);
    });

    it('Should return undefined when any object is negative', () => {
        expect(getPoints(25, [2, 3, -7])).to.be.equal(undefined);
    });
});