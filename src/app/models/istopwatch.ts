export interface IStopWatch{
    id: string,
    stopWatchName: string,
    isActive: boolean,
    stopWatchValue: number,
    toggleTimer():void,
    resetTimer():void
}