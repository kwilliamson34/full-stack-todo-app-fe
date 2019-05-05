import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], args: {key: string, value: string}): any {
    return items.filter(item => item[args.key] === args.value);
  }
}