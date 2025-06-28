import { Component, OnInit } from '@angular/core';
import { LivroType, GeneroLiterario } from "../livro/livro-type";
import { GeneroLivros } from '../genero-livros/genero-livros';
import { livros } from '../../mock-livros';


@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
  imports: [GeneroLivros]
})

export class ListaLivros implements OnInit {
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, LivroType[]> = new Map();

  ngOnInit() {

    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id

      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
      }

      this.livrosPorGenero.get(generoId)?.push(livro)
    })

    this.generos = [
      {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: 'misterio',
        value: "Mistério",
        livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'fantasia',
        value: "Fantasia",
        livros: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: 'ficcao-cientifica',
        value: "Ficção Científica",
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
      },
      {
        id: 'tecnicos',
        value: "Técnicos",
        livros: this.livrosPorGenero.get("tecnicos") ?? []
      },
    ]
    console.log(this.livrosPorGenero)
  }

}
