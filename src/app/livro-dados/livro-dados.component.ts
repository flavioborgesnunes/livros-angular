import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';

import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit{

  public livro: Livro = new Livro;

  public autoresForm: string = "";

  public editoras : Array<Editora>=[];

  constructor(
    private servEditora : ControleEditoraService,
    private servLivros : ControleLivrosService,
    private router : Router
    ){
      this.servEditora = servEditora;
      this.servLivros = servLivros;
      this.router = router;
    }
  ngOnInit(): void {this.editoras = this.servEditora.getEditoras();}
  incluir():void{
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.adicionar(this.livro);
    this.router.navigateByUrl("/lista");
    }
  
}
