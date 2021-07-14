import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import Funcionario from '../interface/Funcionario';
import { FuncionarioService } from '../service/funcionario.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-funcionario-get',
  templateUrl: './funcionario-get.component.html',
  styleUrls: ['./funcionario-get.component.css']
})
export class FuncionarioGetComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor( private funcionarioService: FuncionarioService, private route:ActivatedRoute, 
    private router:Router) {}

  ngOnInit(): void {
    this.funcionarioService
      .getFuncionarios()
      .subscribe((data: Funcionario[])=> {
        this.funcionarios = data
        console.log(data);
      });      
  }

  /**
   * Método responsável por exlcuir um 'Funcionario' pelo Id
   */

  deleteFuncionario(id:any){
    Swal.fire({
      title: 'Deseja realmente excluir o funcionario?',
      text: 'Atenção! Esse funcionario será deletado!',
      icon: 'warning',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!'
    }).then((result) =>{
      if(result.value == true){
        this.funcionarioService.deleteFuncionario(id).subscribe();
        const index = this.funcionarios.indexOf(id);
        Swal.fire({
          text: 'Funcionario deletado com sucesso!'
        }).then((result) =>{
          if(result.value == true){
            location.reload();
          }
        });
      }else if(result.dismiss == Swal.DismissReason.cancel){
        Swal.fire(
          "Operação cancelada com sucesso!"
        );
      }
    });
  }

}
