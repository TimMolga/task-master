import { Component } from '@angular/core';
import { IStopWatch } from '../models/istopwatch';
import { StopWatch } from '../models/stopwatch';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'task-timer',
  templateUrl: './app-task-timer.component.html',
  styleUrls: ['./app-task-timer.component.css']
})
export class AppTaskTimerComponent {
  stopWatchList:IStopWatch[] = [new StopWatch(uuidv4())];

  /** Creates a StopWatch object and inserts it into a list*/
  createStopWatch():void{
    this.stopWatchList.push(new StopWatch(uuidv4()));
  }

  /** Triggers the blur event 
   * @param {any}  event - A enter keydown event.
  */
  blurOnEnter(event:any):void{
    event.target.blur();
  }

  /** Updates a StopWatch name 
   * @param {string | undefined}  watchId A StopWatch ID
   * @param {string | undefined}  watchName A name to update the StopWatch with
  */
  updateStopWatchName(watchId:string | undefined, watchName:string | undefined):void{
    if (watchName){
      let stopWatch = this.stopWatchList.find(stopWatch => stopWatch.id === watchId);
      if (stopWatch) stopWatch.stopWatchName = watchName;
    }
  }

  /** Deletes a StopWatch object from a list 
   * @param {string | undefined}  watchId A StopWatch ID
  */
  deleteStopWatch(watchId:string | undefined):void{
    let newWatchList = this.stopWatchList.filter(stopWatch => stopWatch.id !== watchId);
    this.stopWatchList = [...newWatchList];
  }
  
  /** Toggles a StopWatch object to start or stop the timer 
   * @param {string | undefined}  watchId A StopWatch ID
  */
  toggleStopWatch(watchId:string | undefined):void{
    let stopWatch = this.stopWatchList.find(stopWatch => stopWatch.id === watchId);
    if (stopWatch) stopWatch.toggleTimer();
  }

  /** Resets a StopWatch object watch (timer) value 
   * @param {string | undefined}  watchId A StopWatch ID
  */
  resetStopWatch(watchId:string | undefined):void{
    let stopWatch = this.stopWatchList.find(stopWatch => stopWatch.id === watchId);
    if (stopWatch) stopWatch.resetTimer();
  }

}
