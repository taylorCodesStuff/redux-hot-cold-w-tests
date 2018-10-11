import { RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from './actions';


describe('restartGame', () => {
    it('Should return the action', () => {
        const correctAnswer = 2;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});


describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess = 5;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});