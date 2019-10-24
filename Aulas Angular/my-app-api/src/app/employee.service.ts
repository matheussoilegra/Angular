import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}
  private url = 'http://localhost:3000/employees';

  getEmployees(): Observable<Employees[]> {
    return this._httpClient.get<Employees[]>(this.url);
  }
}
