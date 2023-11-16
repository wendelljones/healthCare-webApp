import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(obj: any, key:any): any {
    console.log(obj)
  let result = obj.filter((m:any)=>m.name.toUpperCase().startsWith(key.toUpperCase()));
  return result;
  }

}
