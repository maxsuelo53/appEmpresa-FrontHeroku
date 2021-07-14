import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioAddComponent } from './funcionario-add/funcionario-add.component';
import { FuncionarioGetComponent } from './funcionario-get/funcionario-get.component';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { SetorAddComponent } from './setor/setor-add/setor-add.component';
import { SetorEditComponent } from './setor/setor-edit/setor-edit.component';
import { SetorGetComponent } from './setor/setor-get/setor-get.component';

const routes: Routes = [
  {path: 'funcionario/create', component: FuncionarioAddComponent},
  {path: 'funcionario/lista', component: FuncionarioGetComponent},
  {path: 'funcionario/:id', component: FuncionarioEditComponent},
  {path: 'setor/create', component: SetorAddComponent},
  {path: 'setor/lista', component: SetorGetComponent},
  {path: 'setor/:id', component: SetorEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
