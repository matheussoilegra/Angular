import { EmployeeDataService } from 'src/app/employees/employee-data.service';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employees/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employees: Observable<any>;

  constructor(
    private _employeeService: EmployeeService,
    private _employeeDataService: EmployeeDataService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getAll();
  }

  delete(key: string) {
    this._employeeService.delete(key);
  }

  edit(employee: Employee, key: string) {
    this._employeeDataService.getEmployee(employee, key);
  }
}
