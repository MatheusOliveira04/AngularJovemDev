import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe'
})
export class MeuPipePipe implements PipeTransform {

  transform(word: string, letter: string, replace: string): string {
    return word.replace(letter, replace);
  }

}
