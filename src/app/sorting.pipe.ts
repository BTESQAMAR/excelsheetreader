import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: 'sorting',

 
})
export class SortingPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
  return  value.sort((a,b) =>{
   let x = a.name;
   let y = b.name;
   if(x<y)
   {
     return -1;
   }
   else
   {
     return 1;

   }

   return 0;

   });
  

  }

}
