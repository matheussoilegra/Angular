import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  url: string = 'https://loiane.com/';
  cursoAngular: boolean = true;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}

  ngOnInit() {}
}
