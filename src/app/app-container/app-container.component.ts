import { Component, Input } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent{
  @Input() theme?:string;
}
