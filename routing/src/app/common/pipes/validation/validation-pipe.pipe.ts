import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationPipe'
})
export class ValidationPipePipe implements PipeTransform {

  transform(value: any): any {

    if (value == 1) {
      return "Verified"
    }
    else {
      return "Not Verified!"
    }
  }
}
