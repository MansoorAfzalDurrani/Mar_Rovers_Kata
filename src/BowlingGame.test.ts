import { romanToDecimal } from "../src/romanToDecimal";
const BowlingGame= require("./BowlingGame");
let game = BowlingGame;
beforeEach(()=>{
  game= new BowlingGame();
})
it('should return 0 for a game of all zero',()=>{
     rollMany(0,20);
     expect(game.score).toBe(0);
});
    it('should return 20 for a game of all one', ()=>{
        rollMany(1,20);
        expect(game.score).toBe(20);
    });
    it('should return the correct score when a spare is rolled', ()=>{
        game.roll(5);
        game.roll(5);
        game.roll(3)
        rollMany(0,17);
        expect(game.score).toBe(16);
    });
    it('Shoud return the correct score when a strik is rolled',()=>{
        game.roll(10);
        game.roll(1);
        game.roll(1); 
        rollMany(0,17);
        expect(game.score).toBe(14);
    })
    it('Shoud return the correct score when a strik and 1,1,4,3 scors are gains',()=>{
        game.roll(10);
        game.roll(1);
        game.roll(1);
        game.roll(4);
        game.roll(3);

        rollMany(0,15);
        expect(game.score).toBe(21);
    })

        
    function rollMany(pins: number,rolls:number){
        for (let i=0; i<rolls; i++){
            game.roll(pins);
        }    
    }
        
    