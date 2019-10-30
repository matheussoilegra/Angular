import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';

@NgModule({
  declarations: [AppComponent, PrimeiroComponenteComponent],
  //declara todos componentes, diretivas e pipes a serem utilizados nesse módulo
  imports: [BrowserModule, AppRoutingModule, CursosModule],
  //importa outros módulos a serem utilizados nesse módulo ou a um componente desse módulo
  providers: [],
  //onde ficam os serviços disponíveis para os componentes desse módulo
  bootstrap: [AppComponent]
  //indica o componente que será instanciado quando executar a aplicação; só existe no app.module.ts
})
export class AppModule {}
