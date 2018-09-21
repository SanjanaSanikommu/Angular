import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  
  

 transform(name: any, gender:any): any {
   if(gender == 'F')
    return "Ms. " + name;
   else
     return "Mr. "+name;
  }

}
