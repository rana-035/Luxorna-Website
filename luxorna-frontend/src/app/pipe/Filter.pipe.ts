import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterName',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        //filter=filter.toLowerCase();
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter( item =>  { return item.Name.includes(filter)});
    }
}