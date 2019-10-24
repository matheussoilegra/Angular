import { Employee } from './../../../employees/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employees/employee.service';
import { EmployeeDataService } from 'src/app/employees/employee-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  employee: Employee;
  key: string = '';

  constructor(
    private _employeeService: EmployeeService,
    private _employeeDataService: EmployeeDataService
  ) {}

  ngOnInit() {
    this.employee = new Employee();
    this._employeeDataService.currentlyEmployee.subscribe(data => {
      if (data.employee && data.key) {
        this.employee = new Employee();
        this.employee.name = data.employee.name;
        this.employee.department = data.employee.department;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this._employeeService.update(this.employee, this.key);
    } else {
      this._employeeService.insert(this.employee);
    }
    this.employee = new Employee();
    this.key = null;
  }
}
