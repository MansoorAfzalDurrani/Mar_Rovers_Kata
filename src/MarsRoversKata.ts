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

