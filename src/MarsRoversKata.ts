type Heading = "N"|"W"|"S"|"E";
type Coordinates =[x:number, y:number];
const Compass: Array<Heading>= ["N","E","S","W"]


export function turnleft(Heading: Heading):string{
 const idx = Compass.indexOf(Heading);
 return Compass[(idx+3)%4];

  }

  export function turnRight(Heading: Heading):string{
   const idx = Compass.indexOf(Heading);
   return Compass[(idx+1)%4];
   
  }

 export function move(Heading: Heading, posittion: Coordinates) : Coordinates | undefined {
  const [x,y]=posittion;
  if (Heading === "N") {
   return [x, y + 1];
 } 
  if (Heading === "E") {
   return [x + 1, y];
  }
 if (Heading === "S") {
      return [x , y-1];
 }
 if (Heading === "W") {
   return [x -1, y];
 }
}




/*
const directions ={
   "N": ["W","E"],
   "w": ["S", "N"]
}*/

   /* for turning left code
   if (x==='N'){
    return 'W';
   }else if (x==='W')
   {
    return 'S';
   }else if (x==='S'){
    return "E";
   }else {
    return "N"

   }*/
   /* for turning right code
   if (x==='N'){
    return 'E';
   }else if (x==='E')
   {
    return 'S';
   }else if (x==='S'){
    return "W";
   }else {
    return "N"
    
   }*/
