import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(author: string): string {
    return 'by ' + author;
  }
}
