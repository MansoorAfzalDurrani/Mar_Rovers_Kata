export function turnleft(x:string):string{
   if (x==='N'){
    return 'W';
   }else if (x==='W')
   {
    return 'S';
   }else if (x==='S'){
    return "E";
   }else {
    return "N"

   }
  }
  export function turnRight(x:string):string{
   if (x==='N'){
    return 'E';
   }else if (x==='E')
   {
    return 'S';
   }else if (x==='S'){
    return "W";
   }else {
    return "N"
    
   }
  }

