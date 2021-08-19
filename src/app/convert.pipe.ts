import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): any {
    if (!value) return '';
    if (targetUnits) {
      switch (targetUnits) {
        case 'km':
          value = value / 1.60934;
          break;
        case 'm':
          value = (value / 1.60934) * 1000;
          break;
        default:
          throw new Error('Target unit not supported');
      }
    }

    return value;
  }
}
