export interface ISubTask{
    id: string,
    subTaskDescription:string,
    isComplete: boolean,
    isEditing: boolean,
    toggleComplete():void,
    toggleEditing():void
}