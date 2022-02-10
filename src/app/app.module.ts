import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PadTimerPipe } from './common/pipes/pad-timer.pipe';
import { TitleCaseInputDirective } from './common/directives/title-case-input.directive';
import { AppCardComponent } from './app-card/app-card.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { AppTaskTimerComponent } from './app-task-timer/app-task-timer.component';
import { AppTaskPlannerComponent } from './app-task-planner/app-task-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    PadTimerPipe,
    TitleCaseInputDirective,
    AppCardComponent,
    AppContainerComponent,
    AppTaskTimerComponent,
    AppTaskPlannerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
