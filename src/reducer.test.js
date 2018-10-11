import reducer from './reducer';
import {makeGuess, restartGame} from './actions';

describe('reducer', () => {
    // Set up dummy data?

    describe('restartGame', () => {
        it('Should reset state', () => {
            let state;
            state = reducer(state, restartGame(2));
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: 2
            });
        });
    });


    describe('makeGuess', () => {
        it('Should make guess', () => {
            let state = {
                guesses: [23],
                feedback: "You're Hot!",
                auralStatus: '',
                correctAnswer: 24
            };
            state = reducer(state, makeGuess(25));
            expect(state).toEqual({
                guesses: [23, 25],
                feedback: "You're Hot!",
                auralStatus: '',
                correctAnswer: 24
            });
        });
    });

});