import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  url: string = 'https://loiane.com/';
  urlImagem: string = 'http://lorempixel.com/400/200/';

  constructor() {}

  ngOnInit() {}
}
