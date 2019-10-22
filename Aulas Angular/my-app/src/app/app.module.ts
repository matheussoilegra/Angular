import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employees-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employees-details/employee-detail.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeDetailComponent],
  imports: [BrowserModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
