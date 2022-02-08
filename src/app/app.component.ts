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
  stopWatchList:IStopWatch[] = [new StopWatch(uuidv4(), "New Task Timer")];
  inputWatchName:string = "";

  createStopWatch(){
    this.stopWatchList.push(new StopWatch(uuidv4(), this.inputWatchName));
    this.inputWatchName = "";
  }

  deleteStopWatch(timerId?:string){
    let newWatchList = this.stopWatchList.filter(x => x.id !== timerId);
    this.stopWatchList = [...newWatchList];
  }
  
  toggleStopWatch(timerId?:string){
    let stopWatch = this.stopWatchList.find(x => x.id === timerId);
    stopWatch?.toggleTimer();
  }

  resetStopWatch(timerId?:string){
    let stopWatch = this.stopWatchList.find(x => x.id === timerId);
    stopWatch?.resetTimer();
  }
}
