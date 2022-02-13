import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css']
})
export class AppIconComponent {
  @Input() iconType?: string;
  @Input() iconActive?: boolean;
  @Input() iconTextDirection?: string;
}
