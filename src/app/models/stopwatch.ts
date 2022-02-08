
import { IStopWatch } from "./istopwatch";

export class StopWatch implements IStopWatch {
    private _interval:any = null;
    private _toggleLabel:string = "Start";
    private _isActive:boolean = false;
    private _timerValue:number = 0;

    constructor(private _id:string, private _watchName:string = ""){}
    
    toggleTimer(): void {
        this._isActive = !this._isActive;
        this.activateTimer(this._isActive);
        this._toggleLabel = this._isActive ? "Stop" : "Start";
    }
    
    private activateTimer(timerActive:boolean):void {
        if (timerActive) {
            this._interval = setInterval(() => {
                this._timerValue++;
            }, 1000);
        } else {
            clearInterval(this._interval);
        }
    }
    
    resetTimer(): void {
        this._timerValue = 0;
        this._interval = null;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    get watchName(){
        return this._watchName;
    }

    set watchName(value){
        this._watchName = value;
    }

    get toggleLabel(){
        return this._toggleLabel;
    }

    get isActive(){
        return this._isActive;
    }

    get timerValue(){
        return this._timerValue;
    }
}