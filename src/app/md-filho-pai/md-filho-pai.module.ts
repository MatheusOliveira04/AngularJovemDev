import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpPaiComponent } from './cp-pai/cp-pai.component';
import { CpFilhoComponent } from './cp-filho/cp-filho.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CpPaiComponent,
    CpFilhoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    CpPaiComponent
  ]
})
export class MdFilhoPaiModule { }
