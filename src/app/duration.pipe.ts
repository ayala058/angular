import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure:false
})
export class DurationPipe implements PipeTransform {

  transform(time:number): any {
    if(time==60)return ' שעה';
    if(time<60)return time.toString()+' דקות';
    const str=(Math.round(time/60)).toString()+'שעה ו '+(time%60).toString()+' דקות';
    return str;
  }

}
