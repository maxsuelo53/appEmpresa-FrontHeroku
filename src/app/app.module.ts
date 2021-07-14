import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import ptBr from '@angular/common/locales/br';
import { registerLocaleData } from '@angular/common';
import { FuncionarioService } from './service/funcionario.service';
import { SetorService } from './service/setor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { FuncionarioAddComponent } from './funcionario-add/funcionario-add.component';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { FuncionarioGetComponent } from './funcionario-get/funcionario-get.component';
import { SetorAddComponent } from './setor/setor-add/setor-add.component';
import { SetorEditComponent } from './setor/setor-edit/setor-edit.component';
import { SetorGetComponent } from './setor/setor-get/setor-get.component';


registerLocaleData(ptBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioAddComponent,
    FuncionarioEditComponent,
    FuncionarioGetComponent,
    SetorAddComponent,
    SetorEditComponent,
    SetorGetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    FuncionarioService,
    SetorService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( library: FaIconLibrary ){
    library.addIcons(faEdit, faTrash,faUserPlus );
  }
 }
