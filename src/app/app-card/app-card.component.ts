import { Component } from '@angular/core';
import { fade } from '../common/animations/animations';

@Component({
  selector: 'card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css'],
  animations: [fade]
})
export class AppCardComponent {
}
