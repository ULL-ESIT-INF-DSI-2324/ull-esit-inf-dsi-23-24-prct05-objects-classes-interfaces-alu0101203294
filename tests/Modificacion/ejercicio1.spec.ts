import 'mocha';
import { expect } from 'chai';
import { Piece, Board, checkAttack } from '../../src/Modificacion/ejercicio1';

describe('Ejercicio 1 - Modificacion', () => {
    it('Debe devolver true para un tablero con reinas en la misma diagonal', () => {
        const board1: Board = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'N', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', 'B', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        expect(checkAttack(board1)).to.be.true;
    });

    it('Debe devolver true para un tablero con reinas en horizontal', () => {
        const board2: Board = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'N', 'B', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        expect(checkAttack(board2)).to.be.true;
    });

    it('Debe devolver true para un tablero con reinas en la misma vertical', () => {
        const board3: Board = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'N', '-', '-', '-', '-'],
            ['-', '-', '-', 'B', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        expect(checkAttack(board3)).to.be.true;
    });

    it('Debe devolver false para un tablero con reinas sin posibilidad de atacarse', () => {
        const board4: Board = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'N', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', 'B', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        expect(checkAttack(board4)).to.be.false;
    });
});
