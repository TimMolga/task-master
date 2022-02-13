import { ISubTask } from "./isubtask";

export interface ITask{
    id: string,
    taskName:string,
    subTasks:ISubTask[],
    isComplete: boolean,
    canComplete: boolean,
    toggleComplete():void,
    toggleCanComplete():void
}