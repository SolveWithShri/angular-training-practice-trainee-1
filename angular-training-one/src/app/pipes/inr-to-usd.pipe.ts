import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrToUsd'
})
export class InrToUsdPipe implements PipeTransform {

  transform(inr: number, conversionRate: number): unknown {
    return (inr/conversionRate);
  }
}
