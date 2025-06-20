import { Component } from '@angular/core';
import { Livro } from "../livro/livro";
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-livros',
  templateUrl: './genero-livros.html',
  styleUrl: './genero-livros.css',
  imports: [Livro]
})
export class GeneroLivros {
  livro = livros[0]
}
