import { Component, input } from '@angular/core';
import { Livro } from "../livro/livro";
import { livros } from '../../mock-livros';
import { GeneroLiterario } from '../livro/livro-type';

@Component({
  selector: 'app-genero-livros',
  templateUrl: './genero-livros.html',
  styleUrl: './genero-livros.css',
  imports: [Livro]
})
export class GeneroLivros {
  
  genero = input.required<GeneroLiterario>();
}
