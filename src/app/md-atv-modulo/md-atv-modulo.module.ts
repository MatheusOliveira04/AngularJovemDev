import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CpFormComponent } from './cp-form/cp-form.component';
import { CpTelaComponent } from './cp-tela/cp-tela.component';
import { CpTableComponent } from './cp-table/cp-table.component';



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
