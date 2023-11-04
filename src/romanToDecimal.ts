export function romanToDecimal(romanNo : string) : number {
   console.log(' inside function '+ romanNo);
   
   const romanNoObj: {[key: string]: number}  = { 'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
   let result=0;
   let previousValue=0;
   for(let i=romanNo.length-1; i>=0; i--)
   {
      const currentChar=romanNo[i];
      const currentValue =romanNoObj[currentChar];
      console.log(' i is' + i+ 'currentChar'+ currentChar);
      if(currentValue<previousValue){
      result = result-currentValue;
      console.log(' inside if current values is '+ currentValue+" previous value is"+previousValue )
      }else{
         result = result + currentValue;
         console.log('result is '+ result);
      }
      previousValue=currentValue;
   }
   console.log(' Result is '+ result);
   return result;
  }

  
