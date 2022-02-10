import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padTimer'
})
export class PadTimerPipe implements PipeTransform {
  /** Transforms a timer value to the correct format
  * @param {number} timerValue The raw time value
  * @returns {string} A time value string with padded numbers
  */
  transform(timerValue: number): string {
    return `${this.padTimerValue(Math.floor(timerValue / 60))}:${this.padTimerValue(timerValue % 60)}`;
  }

  /** Pads a number with a leading zero if a single digit
  * @param {number} timerValue The raw time value
  * @returns {string} A time value with a padded number
  */
  private padTimerValue(timerValue:number):string {
    return (timerValue < 10) ? `0${timerValue}` : `${timerValue}`;
  }
}
