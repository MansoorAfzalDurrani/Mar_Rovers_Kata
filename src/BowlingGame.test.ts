import { romanToDecimal } from "../src/romanToDecimal";
const BowlingGame= require("./BowlingGame");
let game = BowlingGame;
beforeEach(()=>{
    
    game= new BowlingGame();
})
it('should return 0 for a game of all zero',()=>{
     expect(game.score).toBe(0);
});
    it('should return 20 for a game of all one', ()=>{
        rollMany(1,20);
        expect(game.score).toBe(20);
    });
    function rollMany(pins: number,rolls:number){
        for (let i=0; i<rolls; i++){
            game.roll(pins);
        }
    }