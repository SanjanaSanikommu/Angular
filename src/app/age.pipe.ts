import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  currentYear: any;
  birthYear: any;

  transform(date: any): any {
    this.currentYear = new Date().getFullYear();
    this.birthYear = new Date(date).getFullYear();
    return this.currentYear - this.birthYear;
  }

}
