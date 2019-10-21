import { Component } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  carros = [new Carro(1, 'BMW'), new Carro(2, 'Audi')];

  olaMundo() {
    return 'Olá, mundo!';
  }

  retornoMetodo() {
    console.log('Testando retorno do método.');
  }
}
