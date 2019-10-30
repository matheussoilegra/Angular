import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [
    CommonModule
    //contém as diretivas e pipes mais comuns para os componentes desse módulo
  ],
  exports: [CursosComponent],
  //indica as declarations desse módulo que quero expor a outros módulos
  providers: [CursosService]
})
export class CursosModule {}
