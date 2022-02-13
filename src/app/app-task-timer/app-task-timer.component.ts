import { Component } from '@angular/core';
import { StopWatch } from '../models/stopwatch';
import { DataService } from './../services/data.service';

@Component({
  selector: 'task-timer',
  templateUrl: './app-task-timer.component.html',
  styleUrls: ['./app-task-timer.component.css']
})
export class AppTaskTimerComponent {
  stopWatchList:StopWatch[] = [];

  constructor(private service: DataService){}

  ngOnInit(){
    this.stopWatchList = [...this.service.getStopWatches()]
  }

  /** Triggers the blur event from an enter keydown event
    * @param {any}  event - A enter keydown event.
  */
  blurOnEnter(event:any):void{
    event.target.blur();
  }

  /** Creates a StopWatch object and inserts it into a list */
  createStopWatch():void{
    this.stopWatchList.push(new StopWatch());
  }

  /** Deletes a StopWatch object from a list 
    * @param {string}  id A StopWatch ID
  */
  deleteStopWatch(id:string):void{
    let newWatchList = this.stopWatchList.filter(stopWatch => stopWatch.id !== id);
    this.stopWatchList = [...newWatchList];
  }

  /** Gets a StopWatch object in a list by ID
    * @param {string}  id A StopWatch ID
    * @returns {StopWatch} Boolean whether value starts with alphanumeric characters
  */
   private getStopWatch(id:string):StopWatch | undefined {
    return this.stopWatchList.find(stopWatch => stopWatch.id === id);
  }

  /** Resets a StopWatch object watch(timer) value 
    * @param {string}  id A StopWatch ID
  */
  resetStopWatch(id:string):void{
    let stopWatch = this.getStopWatch(id);
    stopWatch?.resetTimer();
  }

  /** Toggles a StopWatch object to start or stop the timer 
    * @param {string}  id A StopWatch ID
  */
  toggleStopWatch(id:string):void{
    let stopWatch = this.getStopWatch(id);
    stopWatch?.toggleTimer();
  }

  /** Updates a StopWatch name 
    * @param {string}  id A StopWatch ID
    * @param {string}  name A new StopWatch name
  */
  updateStopWatchName(id:string, name:string):void{
    let stopWatch = this.getStopWatch(id);
    if (stopWatch && name) stopWatch.stopWatchName = name;
  } 
}
