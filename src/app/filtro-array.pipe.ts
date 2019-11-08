import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  pure:true
})
export class FiltroArrayPipe implements PipeTransform {

 transform(value: any, ...args: any[]): any {

  if ( value.length === 0 || args === undefined ) {
   return value.sort();
  }

  const filtro = (args[0] as String).toLowerCase();
  return value.filter (
   v => v.toLocaleLowerCase().includes(filtro)
  );
}

}
