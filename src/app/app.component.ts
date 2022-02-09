import { Component } from '@angular/core';
import { StopWatch } from './models/stopwatch';
import { IStopWatch } from './models/istopwatch';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-master';
  stopWatchList:IStopWatch[] = [new StopWatch(uuidv4(), '[Task Timer #1]')];
  stopWatchCount:number = 1;

  createStopWatch():void{
    this.stopWatchList.push(new StopWatch(uuidv4(), `[Task Timer #${++this.stopWatchCount}]`));
  }

  blurOnEnter(event:any){
    event.target.blur();
  }

  updateStopWatchName(watchId:string | undefined, watchName:string | undefined):void{
    let stopWatch = this.stopWatchList.find(stopWatch => stopWatch.id === watchId);
    if (stopWatch) stopWatch.stopWatchName = watchName;
  }

  deleteStopWatch(watchId:string | undefined):void{
    let newWatchList = this.stopWatchList.filter(stopWatch => stopWatch.id !== watchId);
    this.stopWatchList = [...newWatchList];
  }
  
  toggleStopWatch(watchId:string | undefined):void{
    let stopWatch = this.stopWatchList.find(stopWatch => stopWatch.id === watchId);
    if (stopWatch) stopWatch.toggleTimer();
  }

  resetStopWatch(watchId:string | undefined):void{
    let stopWatch = this.stopWatchList.find(stopWatch => stopWatch.id === watchId);
    if (stopWatch) stopWatch.resetTimer();
  }
}
