import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: 'Eduardo', age: 41 },
      { id: 2, name: 'João', age: 36 },
      { id: 3, name: 'Pedro', age: 55 },
      { id: 4, name: 'Maria', age: 22 },
      { id: 5, name: 'Luiza', age: 29 }
    ];
  }
}
