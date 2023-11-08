 
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
        const framScore =this.rolls[rollIndex] + this.rolls[rollIndex+1];
        if(framScore === 10){
         score +=10 + this.rolls[rollIndex+2];
         rollIndex +=2;
        }else{
        score += framScore ;
        rollIndex += 2;
        }
        
        }   
        return score;
    }
 }
 module.exports=BowlingGame;
  