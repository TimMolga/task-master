import { Component } from '@angular/core';
import { Task } from '../models/task';
import { SubTask } from '../models/subtask';
import { DataService } from './../services/data.service';

@Component({
  selector: 'task-planner',
  templateUrl: './app-task-planner.component.html',
  styleUrls: ['./app-task-planner.component.css'],
})
export class AppTaskPlannerComponent {
  taskList:Task[] = [];

  constructor(private service: DataService){}

  ngOnInit(){
    this.taskList = [...this.service.getTasks()]
  }

  /** Triggers the blur event from an enter keydown event
    * @param {any}  event - An enter keydown event.
  */
  blurOnEnter(event:any){
    event.target.blur();
  }

  /** Creates a new Task object and inserts it into a list */
  createTask():void{
    this.taskList.push(new Task());
  }

  /** Creates a new SubTask object and inserts it into a subtask list in a Task object by ID
   * @param {string}  id A Task ID
  */
  createSubTask(id:string):void{
    let task = this.getTask(id);
    task?.subTasks.push(new SubTask());
    task?.toggleCanComplete(); 
  }

  /** Completes a Task object by ID
   * @param {string}  id A Task ID
  */
  completeTask(id:string):void{
    let task = this.getTask(id);
    task?.toggleComplete();
  }

  /** Completes a SubTask object by ID and toggles whether a Task object can be completed
   * @param {string}  id A Task ID
   * @param {string}  subId A SubTask ID
  */
  completeSubTask(id:string, subId:string):void{
    let subTask = this.getSubTask(id, subId);
    subTask?.toggleComplete();
    let task = this.getTask(id);
    task?.toggleCanComplete(); 
  }

  /** Deletes a Task object in a list by ID
   * @param {string} taskId A Task ID 
  */
   deleteTask(id:string):void{
    let newTaskList = this.taskList.filter(task => task.id !== id);
    this.taskList = [...newTaskList];
  }

  /** Deletes a SubTask object in a Task object subtask list by ID
   * @param {string}  id A Task ID
   * @param {string}  subId A SubTask ID
  */
  deleteSubTask(id:string, subId:string):void{
    let task = this.getTask(id);
    let newSubTaskList = task?.subTasks.filter(subTask => subTask.id !== subId);
    if (task && newSubTaskList) task.subTasks = [...newSubTaskList];
    task?.toggleCanComplete(); 
  }

  /** Edits a SubTask object by ID
   * @param {string}  id A Task ID
   * @param {string}  subId A SubTask ID
  */
   editSubTask(id:string, subId:string):void{
    let subTask = this.getSubTask(id, subId);
    subTask?.toggleEditing();
  }

    /** Gets a Task object in a list by ID 
   * @param {string}  id A Task ID
  */
  private getTask(id:string):Task | undefined{
    return this.taskList.find(task => task.id === id);
  }
  
    /** Gets a SubTask object in list in a Task object subtask list by ID
     * @param {string}  id A Task ID
     * @param {string}  subId A SubTask ID
    */
  private getSubTask(id:string, subId:string):SubTask | undefined{
    let task = this.getTask(id);
    return task?.subTasks.find(subTask => subTask.id === subId);
  }

  /** Updates a Task object by ID
   * @param {string}  id A Task ID
   * @param {string}  subId A SubTask ID
   * @param {string}  description A new Task name
  */
  updateTaskName(id:string, name:string):void{
    let task = this.getTask(id);
    if (task) task.taskName = name ? name : '';
  }

  /** Updates a SubTask object by ID
   * @param {string}  id A Task ID
   * @param {string}  subId A SubTask ID
   * @param {string}  description A new SubTask description
  */
  updateSubTaskDescription(id:string, subId:string, description:string):void{
    let subTask = this.getSubTask(id, subId);
    if (subTask) subTask.subTaskDescription = description ? description : '';
    subTask?.toggleEditing();   
  }
}
