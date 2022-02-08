import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCapitalizer'
})
export class WordCapitalizerPipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value)
      return null;
    
      let words = value.split(' ');
      for (var i = 0; i < words.length; i++){
        let word = words[i];
          words[i] = this.toCapitalCase(word);
      }
      return words.join(' ');
  }

  private toCapitalCase(word:string):string{
    return word = word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
