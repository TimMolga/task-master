import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padTimer'
})
export class PadTimerPipe implements PipeTransform {

  transform(rawTimerValue: number): string {
    return `${this.padTimerValue(Math.floor(rawTimerValue / 60))}:${this.padTimerValue(rawTimerValue % 60)}`;
  }

  private padTimerValue(timerValue:number):string {
    return (timerValue < 10) ? `0${timerValue}` : `${timerValue}`;
  }
}
