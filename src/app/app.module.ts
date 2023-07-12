import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoCompComponent } from './novo-comp/novo-comp.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { MdPaiFilhoModule } from './md-pai-filho/md-pai-filho.module';
import { MdFilhoPaiModule } from './md-filho-pai/md-filho-pai.module';
import { MdServiceModule } from './md-service/md-service.module';
import { MdAtvModuloModule } from './md-atv-modulo/md-atv-modulo.module';
import { MeuPipePipe } from './meu-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NovoCompComponent,
    DiretivaNgClassComponent,
    DiretivaNgForComponent,
    DiretivaNgIfComponent,
    DiretivaNgModelComponent,
    DiretivaNgStyleComponent,
    DiretivaNgSwitchComponent,
    ExemploBindingComponent,
    ExemploPipesComponent,
    MenuPrincipalComponent,
    MicroondasComponent,
    MeuPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MdPaiFilhoModule,
    MdFilhoPaiModule,
    MdServiceModule, 
    MdAtvModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
