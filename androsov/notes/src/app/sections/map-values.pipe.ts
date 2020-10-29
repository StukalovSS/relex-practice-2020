import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapValues',
  pure: false
})

export class MapValuesPipe implements PipeTransform {

  transform(map: Map<any, any>, ...args: unknown[]): unknown {
    return Array.from( map.values() );
  }

}
