export interface IStopWatch{
    id?: string,
    watchName: string,
    toggleLabel: string,
    isActive: boolean,
    timerValue: number,
    toggleTimer():void,
    resetTimer():void
}