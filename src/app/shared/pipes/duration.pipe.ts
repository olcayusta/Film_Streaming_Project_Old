import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure: true
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let hours;

    const duration = value;

    const minutes = Math.floor(duration / 60);
    console.log(Math.floor(minutes));

    if (Math.floor(minutes) > 60) {
      const hour = Math.floor(minutes / 60);
      const minute = Math.floor(minutes % 60);
      const second = Math.floor(value - minutes * 60);
      return hour + ':0' + minute + ':' + second;
    } else {
      const second = Math.floor(value - minutes * 60)
      const minute = Math.floor(minutes % 60);
      return minute + ':' + second;
    }

    /*   console.log(value);


       let custom;

       let minutes = Math.floor(value / 60);

       console.log(minutes);

       const hour = minutes / 60;
       const minute = hour - 60;
       console.log(minutes % 60);

    /!*   if (hours > 0) {
         custom = `${hours}:` ;
       }*!/

       let seconds: any = Math.floor(value - minutes * 60);

       if (seconds < 10) {
         seconds = '0' + Math.floor(value - minutes * 60);
       }

       return minutes + ':' + seconds;

   /!*    const durationMins = Math.floor(value / 60);
       const durationSecs = Math.floor(value - durationMins * 60);
       if (durationSecs < 10) { durationSecs = '0' + durationSecs; }
       if (this.durationMins < 10) { this.durationMins = '0' + this.durationMins; }*!/*/
  }

}
