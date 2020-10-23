import { Pipe, PipeTransform } from '@angular/core';

import { SortOrder } from '../enums/sort-order.enum';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(names: string[], order: SortOrder) {
    console.log('SortPipe -> transform');
    
    switch (order) {
      case SortOrder.ASC:
        return names.sort();
      case SortOrder.DESC:
        return names.sort().reverse();
    }
  }
}
