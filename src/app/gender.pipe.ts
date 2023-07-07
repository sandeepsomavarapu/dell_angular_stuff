import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name:string,gender:string):string {
    if(gender=="male")
    {
      return "MR."+name
    }
    else{
      return "Ms."+name
    }
  }

}
