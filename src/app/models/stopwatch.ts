
import { IStopWatch } from "./istopwatch";

/** @implements {IStopWatch} */
export class StopWatch implements IStopWatch {
    private _interval:any = null;
    private _toggleLabel:string = 'Start';
    private _isActive:boolean = false;
    private _stopWatchValue:number = 0;
    private _stopWatchName:string = '[Enter Task Timer Name]';

    /** @param {string} _id Generated StopWatch ID */
    constructor(private _id:string){}
    
    /** Toggles the StopWatch timer between active and inactive */
    toggleTimer(): void {
        this._isActive = !this._isActive;
        this.activateTimer(this._isActive);
        this._toggleLabel = this._isActive ? 'Stop' : 'Start';
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

    set id(value){
        this._id = value;
    }

    get stopWatchName(){
        return this._stopWatchName;
    }

    set stopWatchName(value){
        this._stopWatchName = value;
    }

    get toggleLabel(){
        return this._toggleLabel;
    }

    get isActive(){
        return this._isActive;
    }

    get stopWatchValue(){
        return this._stopWatchValue;
    }
}