import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  nome: string = 'Matheus';
  pessoa: any = {
    nome: 'Lunna',
    idade: '30',
    endereco: {
      rua: 'Nome da Rua',
      numero: 999
    }
  };

  constructor() {}

  ngOnInit() {}
}
