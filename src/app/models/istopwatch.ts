export interface IStopWatch{
    id?: string,
    stopWatchName?: string,
    toggleLabel: string,
    isActive: boolean,
    stopWatchValue: number,
    toggleTimer():void,
    resetTimer():void
}