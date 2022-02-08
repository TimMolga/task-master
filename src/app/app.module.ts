import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PadTimerPipe } from './common/pipes/pad-timer.pipe';
import { WordCapitalizerPipe } from './common/pipes/word-capitalizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PadTimerPipe,
    WordCapitalizerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
