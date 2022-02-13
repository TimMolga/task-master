import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { StopWatch } from '../models/stopwatch';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getTasks():Task[]{
    return [new Task()]
  }

  getStopWatches():StopWatch[]{
    return [new StopWatch()]
  }
}
