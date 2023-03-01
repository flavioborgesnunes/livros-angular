import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros : Array<Livro> =[
    {
      codigo:1,
      codEditora: 1,
      titulo: 'Os Miseráveis',
      resumo: 'A história sobre Jean Valjean, que da pobresa foi repentinamente inserido na alta sociedade',
      autores:['Vitor Hugo', 'Maria']
    },
    {
      codigo:2,
      codEditora: 2,
      titulo: 'Crime e Castigo',
      resumo: 'Até que ponto o crime compensa? Essa história conta sobre Raskólnikov, que queria justificar seus crimes levando em consideração os grandes "criminosos" mundiais tidos como herois.',
      autores:['Fiódor Dostoiévsk','Joana']
    },
    {
      codigo:3,
      codEditora: 3,
      titulo: 'Guerra e Paz',
      resumo: 'O romance de Tolstói versa sobre o caráter fatídico dos conflitos sangrentos nas relações humanas. Explora as origens das guerras napoleônicas no Oriente (em 1805 e 1812) e seus resultados',
      autores: ['Tolstói', 'Juremar']
    },
  ]

  constructor() { }
  obterLivro(){
    return this.livros
  }
  adicionar(livro:Livro){
    try{
      var codigo:number =(this.livros.length -1);
      livro.codigo = this.livros[codigo].codigo + 1;
      this.livros.push(livro);
  }
    catch{
      livro.codigo = 1;
      this.livros.push(livro);
    }
  }
  excluir(num:number){
      var livroEncontrado = this.livros.findIndex((livro:Livro)=>{
        return num == livro.codigo
      });
      this.livros.splice(livroEncontrado, 1)
  }
}
