import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http:loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/id/237/400';

  valorAtual: string = '';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
// Continuar...
  salvarValor(valor) {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
