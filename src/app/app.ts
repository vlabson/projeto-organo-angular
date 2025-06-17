import { Component } from '@angular/core';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";
import { CardLIvro } from "./componentes/card-livro/card-livro";

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    Rodape,
    CardLIvro
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'organo';
}
