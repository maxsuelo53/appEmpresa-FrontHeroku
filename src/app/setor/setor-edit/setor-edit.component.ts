import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { SetorService } from '../../service/setor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-setor-edit',
  templateUrl: './setor-edit.component.html',
  styleUrls: ['./setor-edit.component.css']
})
export class SetorEditComponent implements OnInit {

  setorForm!: FormGroup;
  setor: any = {};


  constructor(private route:ActivatedRoute, 
              private router:Router, 
              private setorService: SetorService,
              private formBuilder: FormBuilder) {
                
                this.createForm();
  }

  /*Método responsável por criar um formulário ao entrar na página de Atualizar Setor*/
  createForm(){
    this.setorForm = this.formBuilder.group({      
      nome: ['',Validators.required],
      local: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.setorService.editSetor(params.id).subscribe( res =>{
        this.setor = res;

        this.setorForm.setValue({
          nome: this.setor.nome,
          local: this.setor.local,
        });
      });
    });
  }

  /**
   * Método responsável por Atualizar o 'setor' por ID através do botao 'Update'
   */
   updateSetor(nome: any, local: any){
    this.route.params.subscribe(params =>{
      this.setorService.updateSetor(nome,local,params.id);

      //this.router.navigate(['setor/lista']);
      
      Swal.fire({
        title: 'Setor atualizado com sucesso!',
        icon: 'success',
        showConfirmButton: true,
        timer: 1500

      });
    });
  }

}
