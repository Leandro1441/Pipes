import { Component, OnInit } from '@angular/core';

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

 
  constructor() { }

  ngOnInit() {
  }

}
