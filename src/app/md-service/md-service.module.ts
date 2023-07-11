import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpAgrupadorComponent } from './cp-agrupador/cp-agrupador.component';
import { CpAComponent } from './cp-a/cp-a.component';
import { CpBComponent } from './cp-b/cp-b.component';



@NgModule({
  declarations: [
    CpAgrupadorComponent,
    CpAComponent,
    CpBComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    CpAgrupadorComponent
  ]
})
export class MdServiceModule { }
