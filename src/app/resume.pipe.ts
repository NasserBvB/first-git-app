import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

myLimit: number=0;

  transform(value: any, limit?: number): any {
    if(!value){
      return null;
    }
    this.myLimit = (limit) ? limit : 20;
    return value.substr(0,this.myLimit) + ' ...';
  }
 
}
