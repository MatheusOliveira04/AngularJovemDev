import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpTelaComponent } from './cp-tela/cp-tela.component';
import { CpFormComponent } from './cp-form/cp-form.component';
import { CpTableComponent } from './cp-table/cp-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CpTelaComponent,
    CpFormComponent,
    CpTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CpTelaComponent
  ]
})
export class MdAtvModuloModule { }
