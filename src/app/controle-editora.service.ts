import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  
  editoras: Array<Editora> = [
   {
    nome :'Abril',
    codEditora: 1
  },
    {
     nome :'Cultura',
     codEditora: 2
   },
    {
     nome :'Moderna',
     codEditora: 3
   },
  ]

  getNomeEditora(codigoEditora:number){
    let editora: Editora[]  = this.editoras.filter((editora:Editora)=>{
      return editora.codEditora == codigoEditora
    })
    return editora[0].nome;
  }; 
  
  getEditoras(){
    return this.editoras
  }
}
