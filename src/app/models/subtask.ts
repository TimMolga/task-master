import { ISubTask } from './isubtask';
import { v4 as uuidv4 } from 'uuid';

export class SubTask implements ISubTask {
    private _id:string = uuidv4();
    private _subTaskDescription:string = '';
    private _isComplete:boolean = false;
    private _isEditing:boolean = false;

    toggleComplete(): void {
        this._isComplete = !this._isComplete;
    }

    toggleEditing(): void {
        this._isEditing = !this._isEditing;
    }

    get id(){
        return this._id;
    }

    get subTaskDescription(){
        return this._subTaskDescription;
    }

    set subTaskDescription(value){
        this._subTaskDescription = value;
    }

    get isComplete(){
        return this._isComplete;
    }

    get isEditing(){
        return this._isEditing;
    }
}