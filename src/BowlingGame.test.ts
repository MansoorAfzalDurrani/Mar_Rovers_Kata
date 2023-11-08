import { romanToDecimal } from "../src/romanToDecimal";
const BowlingGame = require('./BowlingGame');
it('should return 0 for a game of all zero',()=>{
    const game = new BowlingGame();
    for(let i=0; i<20;i++){
        game.roll(0);
    }
    expect(game.score).toBe(0);
});
    it('should return 20 for a game of all one', ()=>{
        const game = new BowlingGame();
        for (let i=0; i<20; i++){
            game.roll(1);
        }
        expect(game.score).toBe(20);
    });