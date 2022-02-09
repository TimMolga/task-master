import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PadTimerPipe } from './common/pipes/pad-timer.pipe';
import { TitleCaseInputDirective } from './common/directives/title-case-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    PadTimerPipe,
    TitleCaseInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
