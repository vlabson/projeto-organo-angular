import { Component, input } from '@angular/core';
import { LivroType } from './livro-type';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})
export class Livro {

  livro = input.required<LivroType>();

  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito
  }

}
