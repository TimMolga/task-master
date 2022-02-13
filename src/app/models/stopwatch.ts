import { IStopWatch } from "./istopwatch";
import { v4 as uuidv4 } from 'uuid';

/** @implements {IStopWatch} */
export class StopWatch implements IStopWatch {
    private _id:string = uuidv4();
    private _stopWatchName:string = '[Enter timer name]';
    private _isActive:boolean = false;
    private _stopWatchValue:number = 0;
    private _interval:any = null;
    
    /** Toggles the StopWatch timer between active and inactive */
    toggleTimer(): void {
        this._isActive = !this._isActive;
        this.activateTimer(this._isActive);
    }
    
    /** Activates and runs the StopWatch timer 
    * @param {boolean}  timerActive The active/inactive state of the timer
    */
    private activateTimer(timerActive:boolean):void {
        if (timerActive) {
            this._interval = setInterval(() => {
                this._stopWatchValue++;
            }, 1000);
        } else {
            clearInterval(this._interval);
        }
    }
    
    /** Resets the StopWatch watch (timer) value */
    resetTimer(): void {
        this._stopWatchValue = 0;
        this._interval = null;
    }

    get id(){
        return this._id;
    }

    get stopWatchName(){
        return this._stopWatchName;
    }

    set stopWatchName(value){
        this._stopWatchName = value;
    }

    get isActive(){
        return this._isActive;
    }

    get stopWatchValue(){
        return this._stopWatchValue;
    }
}