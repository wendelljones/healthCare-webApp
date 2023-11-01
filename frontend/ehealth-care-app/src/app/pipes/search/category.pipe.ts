import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(cat: any[], key:any): any[] {
    if(!cat || !Array.isArray(cat)) {
      return [];
    }
    return cat.filter((m:any) => m.category.toLowerCase().includes(key.toLowerCase()));
  }

}
