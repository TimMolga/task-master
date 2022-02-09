import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[TitleCaseInput]'
})
export class TitleCaseInputDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value:string = this.el.nativeElement.value;
    let words = value.split(' ');
      for (var i = 0; i < words.length; i++){
        let word = words[i];
        if (this.isAlphaNumeric(word)){
          words[i] = this.toTitleCase(word);
        }  
        else {
          words[i] = this.toTitleCaseWithAlphaNumeric(word);
        }   
      }
      this.el.nativeElement.value = words.join(' ');
  }

  private isAlphaNumeric(word: string):boolean{
      let code = word.charCodeAt(0);
      return (code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123);
  }

  private toTitleCaseWithAlphaNumeric(word:string):string{
    return word.substr(0,1) + word.substr(1,1).toUpperCase() + word.substr(2).toLowerCase();
  }


  private toTitleCase(word:string):string{
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
