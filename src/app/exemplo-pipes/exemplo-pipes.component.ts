import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemploPipesComponent implements OnInit {

  livro:any={
    titulo:'JavaScript para iniciantes',
    rating:4.54321,
    numeroPaginas:314,
    preco:44.99,
    dataLancamento: new Date(2016,11,23),
    url:'www.google.com.br'
  };

  livros:string[]=['Java','Angular','css','Html','Node.js'];
  filtro:string="";

  addCursos(novoCurso){
    if(novoCurso.length>0){
    this.livros.push(novoCurso);
    }
    else{
      alert("Curso vazio")
    }
  }
  obterCurso(){
    if ( this.livros.length === 0 || this.filtro === undefined || this.filtro.trim()==='') 
      return this.livros
     return this.livros.filter((v)=>{
       if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase())>=0)
          return true
        return false
     }
     )
  }

  valorAsync= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('valor assincrono'),2000)
  });
  valorAsync2= interval(2000).pipe(map(valor => "Valor Async2"))

 
  constructor() { }

  ngOnInit() {
  }

}
