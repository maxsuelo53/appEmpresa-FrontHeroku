import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { SetorService } from '../../service/setor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-setor-add',
  templateUrl: './setor-add.component.html',
  styleUrls: ['./setor-add.component.css']
})
export class SetorAddComponent implements OnInit {

  setorForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private setorService: SetorService) {
    this.createForm();
  }

  createForm() {
    this.setorForm = this.formBuilder.group({
      nome: ['',Validators.required],
      local: ['',Validators.required]
    });
  }

  createNewSetor(nome:any, local:any){
    this.setorService.createNewSetor(nome,local)

    Swal.fire({
      title:'Setor adicionado com sucesso!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: true

    });
    this.setorForm.reset();
  }

  ngOnInit(): void {
  }

}
