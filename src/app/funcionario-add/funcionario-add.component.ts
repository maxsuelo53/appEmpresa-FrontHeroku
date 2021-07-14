import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { FuncionarioService } from '../service/funcionario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario-add',
  templateUrl: './funcionario-add.component.html',
  styleUrls: ['./funcionario-add.component.css']
})
export class FuncionarioAddComponent implements OnInit {

  funcionarioForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private funcionarioService: FuncionarioService) {
    this.createForm();
  }

  createForm() {
    this.funcionarioForm = this.formBuilder.group({
      nome: ['',Validators.required],
      cargo: ['',Validators.required],
      salario: ['',Validators.required],
      data_nascimento: ['',Validators.required],
      registro_funcionario: ['',Validators.required]
    });
  }
  /**
   * Método responsável por adicionar novo 'Funcionario' --> 
   * @param nome 
   * @param cargo 
   * @param salario 
   * @param data_nascimento 
   * @param registro_funcionario 
   */
  createNewFuncionario(nome: any, cargo: any, salario: any, data_nascimento: any, registro_funcionario: any)
  {
    this.funcionarioService.createNewFuncionario (nome, cargo, salario, data_nascimento, registro_funcionario)

    Swal.fire({
      title:'Funcionario adicionado com sucesso!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: true

    });
    this.funcionarioForm.reset();
  }

  ngOnInit(): void {
  }

}
