import { SubTask } from './subtask';
import { ITask } from './itask';
import { v4 as uuidv4 } from 'uuid';

export class Task implements ITask {
    private _id:string = uuidv4();
    private _taskName:string = '';
    private _subTasks:SubTask[] = [new SubTask()];
    private _isComplete:boolean = false;
    private _canComplete:boolean = false;

    toggleComplete(): void {
        this._isComplete = !this._isComplete;
    }

    toggleCanComplete(): void {
        let subTaskCompleteCount = this._subTasks.reduce((counter, subTask) => !subTask.isComplete  ? counter += 1 : counter, 0);
        this._canComplete = subTaskCompleteCount === 0;
    }

    get id(){
        return this._id;
    }

    get taskName(){
        return this._taskName;
    }

    set taskName(value){
        this._taskName = value;
    }

    get subTasks(){
        return this._subTasks;
    }

    set subTasks(value){
        this._subTasks = value;
    }

    get isComplete(){
        return this._isComplete;
    }

    get canComplete(){
        return this._canComplete;
    }
}