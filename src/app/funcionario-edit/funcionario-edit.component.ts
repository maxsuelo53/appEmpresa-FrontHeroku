import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { FuncionarioService } from '../service/funcionario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario-edit',
  templateUrl: './funcionario-edit.component.html',
  styleUrls: ['./funcionario-edit.component.css']
})
export class FuncionarioEditComponent implements OnInit {

  funcionarioForm!: FormGroup;
  funcionario: any = {};

  constructor(private route:ActivatedRoute, 
              private router:Router, 
              private funcionarioService: FuncionarioService,
              private formBuilder: FormBuilder) { 

                this.createForm();
  }

  /*Método responsável por criar um formulário ao entrar na página de Atualizar Funcionario(a)*/
  createForm(){
    this.funcionarioForm = this.formBuilder.group({      
      nome: ['',Validators.required],
      cargo: ['',Validators.required],
      salario: ['',Validators.required],
      data_nascimento: ['',Validators.required],
      registro_funcionario: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.funcionarioService.editFuncionario(params.id).subscribe( res =>{
        this.funcionario = res;

        this.funcionarioForm.setValue({
          nome: this.funcionario.nome,
          cargo: this.funcionario.cargo,
          salario: this.funcionario.salario,
          data_nascimento: this.funcionario.data_nascimento,
          registro_funcionario: this.funcionario.registro_funcionario
        });
      });
    });
  }

  /**
   * Método responsável por Atualizar o 'funcionario' por ID através do botao 'Update'
   */
  updateFuncionario(nome: any, cargo: any, salario: any, data_nascimento: any, registro_funcionario: any){
    this.route.params.subscribe(params =>{
      this.funcionarioService.updateFuncionario(nome,cargo,salario,data_nascimento,registro_funcionario,params.id);

      //this.router.navigate(['funcionario/lista']);
      
      Swal.fire({
        title: 'Funcionario atualizado com sucesso!',
        icon: 'success',
        showConfirmButton: true,
        timer: 1500

      });
    });
  }


}
