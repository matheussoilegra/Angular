import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<div>Usando inline no template</div>',
  // styleUrls: ['./app.component.scss']
  styles: [
    `
      div {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  title = 'my-app';
}
