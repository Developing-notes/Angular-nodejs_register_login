import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: any): any {
    if (!items) return [];
    if (!searchText) return items;
    console.log("🚀 ~ file: filter.pipe.ts ~ line 12 ~ FilterPipe ~ transform ~ items", items)
    console.log("🚀 ~ file: filter.pipe.ts ~ line 13 ~ FilterPipe ~ transform ~ searchText", searchText)
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase())
      })
    })
  }

}
