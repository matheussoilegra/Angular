import { Employee } from './employee';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _angularFireDatabase: AngularFireDatabase) {}

  insert(employee: Employee) {
    this._angularFireDatabase
      .list('employees')
      .push(employee)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(employee: Employee, key: string) {
    this._angularFireDatabase.list('employees').update(key, employee);
  }

  getAll() {
    return this._angularFireDatabase
      .list('employees')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(data => ({
            key: data.payload.key,
            ...data.payload.val()
          }));
        })
      );
  }

  delete(key: string) {
    this._angularFireDatabase.object(`employees/${key}`).remove();
  }
}
