import { Pipe, PipeTransform } from '@angular/core';

/**
 * Makes a hyper-reference to an id
 */
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'idref'})
export class IdRefPipe implements PipeTransform {
  transform(ref: string): string {
    return '#' + ref;
  }
}
