import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[TitleCaseInput]'
})
export class TitleCaseInputDirective {

  /** @param {ElementRef} el An HTML input element */
  constructor(private el: ElementRef) { }

  /** Reformats the input value to title case on element blur */
  @HostListener('blur') onBlur():void {
    let value:string = this.el.nativeElement.value;
    let words = value.split(' ');
      for (var i = 0; i < words.length; i++){
        let word = words[i];
        words[i] = this.toTitleCase(word);
      }
      this.el.nativeElement.value = words.join(' ');
  }

  /** Checks whether the given value starts with alphanumeric characters
  * @param {string} word The input value
  * @returns {boolean} Boolean whether value starts with alphanumeric characters
  */
  private isAlphaNumeric(word: string):boolean{
      let code = word.charCodeAt(0);
      return (code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123);
  }

  /** Reformats input value to title case
  * @param {string} word The input value
  * @returns {string} An input value in title case
  */
  private toTitleCase(word:string):string{
    if (this.isAlphaNumeric(word))
      return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
    else
      return word.substr(0,1) + word.substr(1,1).toUpperCase() + word.substr(2).toLowerCase();
  }
}
