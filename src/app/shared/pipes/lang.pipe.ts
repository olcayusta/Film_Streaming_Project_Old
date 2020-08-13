import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {
  langs = [
    {
      code: 'ja', value: 'Japonca'
    },
    {
      code: 'en', value: 'İngilizce'
    },
    {
      code: 'tur', value: 'Türkçe'
    },
    {
      code: 'jpn', value: 'Japonca'
    },
  ];

  transform(value: any, args?: any): any {
    const found = this.langs.find((element) => {
      return element.code === value;
    });
    return found.value;
  }

}
