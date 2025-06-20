import { Component } from '@angular/core';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";
import { ListaLivros } from "./componentes/lista-livros/lista-livros";
import { GeneroLivros } from "./componentes/genero-livros/genero-livros";

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    Rodape,
    ListaLivros,
    GeneroLivros
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'organo';
}
