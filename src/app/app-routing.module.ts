import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoCompComponent } from './novo-comp/novo-comp.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { CpPaiComponent } from './md-pai-filho/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiCompoent2 } from './md-filho-pai/cp-pai/cp-pai.component';
import { CpAgrupadorComponent } from './md-service/cp-agrupador/cp-agrupador.component';
import { CpTelaComponent } from './md-atv-modulo/cp-tela/cp-tela.component';

const routes: Routes = [
  {path: "bindings", component: ExemploBindingComponent},
  {path:"ngClass", component: DiretivaNgClassComponent},
  {path:"ngStyle", component: DiretivaNgStyleComponent},
  {path: "ngModel", component: DiretivaNgModelComponent},
  {path: "ngIf", component: DiretivaNgIfComponent},
  {path: "ngFor", component: DiretivaNgForComponent},
  {path: "ngSwitch", component: DiretivaNgSwitchComponent},
  {path: "pipes", component: ExemploPipesComponent},
  {path: "imc", component: NovoCompComponent},
  {path: "microondas", component: MicroondasComponent},
  {path: "pai_filho", component: CpPaiComponent},
  {path: "filho_pai", component: CpPaiCompoent2},
  {path: "agrupador", component: CpAgrupadorComponent},
  {path: "tela", component: CpTelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
