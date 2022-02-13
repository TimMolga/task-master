import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppCardComponent } from './app-card/app-card.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { AppTaskTimerComponent } from './app-task-timer/app-task-timer.component';
import { AppTaskPlannerComponent } from './app-task-planner/app-task-planner.component';
import { AppIconComponent } from './app-icon/app-icon.component';
import { PadTimerPipe } from './common/pipes/pad-timer.pipe';
import { TitleCaseInputDirective } from './common/directives/title-case-input.directive';
import { HyphenatorPipe } from './common/pipes/hyphenator.pipe';
import { AutofocuserDirective } from './common/directives/autofocuser.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppCardComponent,
    AppContainerComponent,
    AppTaskTimerComponent,
    AppTaskPlannerComponent,
    PadTimerPipe,
    TitleCaseInputDirective,
    AppIconComponent,
    HyphenatorPipe,
    AutofocuserDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
