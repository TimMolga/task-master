import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Autofocuser]'
})
export class AutofocuserDirective {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
