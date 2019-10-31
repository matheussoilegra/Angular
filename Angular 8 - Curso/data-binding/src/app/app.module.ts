import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoBindingComponent } from './two-binding/two-binding.component';
import { MeuFormComponent } from './meu-form/meu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoBindingComponent,
    MeuFormComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
