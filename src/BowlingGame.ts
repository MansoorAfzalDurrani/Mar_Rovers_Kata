 
  export class BowlingGame{

    private rolls: number[];

     constructor(){
     this.rolls =[];
    }
     
    roll(pins: number){
        this.rolls.push(pins);
    }
  get score(){
    let score = 0;
    let rollIndex =0;
    for (let frameIndex=0; frameIndex<10; frameIndex++){
        const frameScore =this.rolls[rollIndex] + this.rolls[rollIndex+1];
        if(this.isSpare(frameScore)){
         score +=this.spareBonus(rollIndex)
         rollIndex +=2;
        }else{
        score += frameScore ;
        rollIndex += 2;
        }
      }   
        return score;
    }
    isSpare(frameScore: number){
        return frameScore === 10;
    }
    spareBonus(rollIndex: number){
       return 10 + this.rolls[rollIndex+2];
    }
 }
 module.exports=BowlingGame;
  