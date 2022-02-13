import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenator'
})
export class HyphenatorPipe implements PipeTransform {
  characterLimit:number = 28;

  transform(value: string): string {
    let words = value.split(' ');
      for (var i = 0; i < words.length; i++){
        let word = words[i];
        console.log(word)
        words[i] = this.isWordLengthMaxLimit(word) ? this.hypenateWord(word) : word ;
      }
      return words.join(' ');
  }

  /** Checks whether the word is larger than 25 characters
  * @param {string} word The input value
  * @returns {boolean} Boolean whether the word at max limit
  */
  private isWordLengthMaxLimit(word:string):boolean{
    return word.length > this.characterLimit + 1;
  }


  /** Reformats input value with a hypen
  * @param {string} word The input value
  * @returns {string} A hyphenated input value
  */
  private hypenateWord(word:string):string{
    const actualWordLength = word.length;
    const wordDivision = Math.ceil(actualWordLength / this.characterLimit + 1);

    if (wordDivision > 1){
      let newWord = '';
      let startSub = 0;
      let endSub = this.characterLimit ;
      for (var i = 0; i < wordDivision; i++){
        let newWordLength = word.substring(startSub, endSub);
        startSub = endSub;
        endSub = startSub + this.characterLimit ;
        newWord += newWordLength.length < this.characterLimit  ? newWordLength : `${newWordLength}- `
      }
      return newWord;
    }
    else{
      return `${word.substring(0,this.characterLimit )}- ${word.substring(this.characterLimit )}`;
    }
  }
}
