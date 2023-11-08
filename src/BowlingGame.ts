class BowlingGame{
    private runningScore: number;
    constructor(){
     this.runningScore=0;
    }
 roll(pins:number){
  this.runningScore += pins;
 }
 get score(){
    return this.runningScore;
 }
}
module.exports=BowlingGame;
