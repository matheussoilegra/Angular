import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { EmployeeListComponent } from './components/employees-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employees-details/employee-detail.component';
import { NgForComponent } from './components/ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    NgIfComponent,
    NgModelComponent,
    NgForComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
