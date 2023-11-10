type Heading = "N"|"W"|"S"|"E";
const Compass: Array<Heading>= ["N","E","S","W"]

/*
const directions ={
   "N": ["W","E"],
   "w": ["S", "N"]
}*/

export function turnleft(Heading: Heading):string{
 const idx = Compass.indexOf(Heading);
 return Compass[(idx+3)%4];
   /*
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
  }

  export function turnRight(Heading: Heading):string{
   const idx = Compass.indexOf(Heading);
   return Compass[(idx+1)%4];
   /*
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
  }

