import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import Setor from '../../interface/Setor';
import { SetorService } from '../../service/setor.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-setor-get',
  templateUrl: './setor-get.component.html',
  styleUrls: ['./setor-get.component.css']
})
export class SetorGetComponent implements OnInit {

  setores: Setor[] = [];

  constructor( private setorService: SetorService, private route:ActivatedRoute, 
    private router:Router) {}

  ngOnInit(): void {
    this.setorService
      .getSetores()
      .subscribe((data: Setor[])=> {
        this.setores = data
      });      
  }

    /**
   * Método responsável por exlcuir um 'Setor' pelo Id
   */

     deleteSetor(id:any){
      Swal.fire({
        title: 'Deseja realmente excluir o setor?',
        text: 'Atenção! Esse setor será deletado!',
        icon: 'warning',
        showCancelButton:true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim!'
      }).then((result) =>{
        if(result.value == true){
          this.setorService.deleteSetor(id).subscribe();
          const index = this.setores.indexOf(id);
          Swal.fire({
            text: 'Setor deletado com sucesso!'
          }).then((result) =>{
            if(result.value == true){
              location.reload();
            }
          });
        }else if(result.dismiss == Swal.DismissReason.cancel){
          Swal.fire(
            "Operação cancelada!"
          );
        }
      });
    }

}
