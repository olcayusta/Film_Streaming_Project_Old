import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentTime',
  pure: true
})
export class CurrentTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const minutes = Math.floor(value / 60);
    let seconds: any = (value - minutes * 60);

    if (seconds < 10) {
      seconds = '0' + Math.floor(value % 60);
    } else {
      seconds = Math.floor(value % 60);
    }

    return minutes + ':' + seconds;
  }

}
