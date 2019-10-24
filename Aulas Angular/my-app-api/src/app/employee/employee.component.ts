import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _employeeService: EmployeeService) {}
  public employees: Employees[];

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(returning => {
      this.employees = returning.map(item => {
        return new Employees(item.id, item.name, item.department);
      });
    });
  }
}
