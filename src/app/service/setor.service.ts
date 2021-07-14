import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Setor from '../interface/Setor';


@Injectable({
  providedIn: 'root'
})
export class SetorService {

  uri = 'https://app-empresa-topicos-avancados.herokuapp.com';

  constructor(private http: HttpClient) { }

  createNewSetor(nome: string, local:string){
    const setor = {nome, local};
    console.log(setor);

    //==> (POST - URL no back-end): http//localhost:300/setor
    this.
      http.
        post( `${this.uri}/setor`, setor).subscribe(res => console.log('Feito'));
  }

  /**
   * Método responsável por listar todos os 'Setores'
   */

  getSetores(): Observable<Setor[]>{
  //==> (GET - URL no Back-End): http://localhost:3000/setor
  return this
    .http
    .get<Setor[]>(`${this.uri}/setor`);
  }

  /**
   * Método responsável por editar um 'Setor'
   */

  editSetor(id: any){
  //==> (PUT - URL no Back-End): http://localhost:3000/setor:id
  return this
  .http
  .get(`${this.uri}/setor/${id}`);
  }

  /**
   * Método responsável pela ação do botão Update no arquivo 'setor-edit.component.html'
   */
  updateSetor(nome: any, local: any, id:any){
  const setor ={
    nome,
    local,
  };

  this
    .http
    .put(`${this.uri}/setor/${id}`,setor)
    .subscribe(res => console.log('Done!'));
  }
  /**
   * Método para excluir um Setor pelo Id
   */
    deleteSetor(id:any){
    //==> (DELETE - URL no Back-End): http://localhost:3000/setor:id
    return this
    .http
    .delete(`${this.uri}/setor/${id}`);
  }
}


  
