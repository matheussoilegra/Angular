import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public name = 'Angular';
  public name2 = 'framework';

  public names = {
    id: 1,
    name: 'James',
    lastName: 'Bond'
  };

  public date = new Date();

  constructor() {}

  ngOnInit() {}
}
