/**
 * arquivo: app/service/funcionario
 * descrição: arquivo responsável por realizar as transições de request ('Funcionario')
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Funcionario from '../interface/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  uri = 'https://app-empresa-topicos-avancados.herokuapp.com';

  constructor(private http: HttpClient) { }

  createNewFuncionario(nome: string, cargo: string, salario: number, data_nascimento: Date, registro_funcionario: number){
    const funcionario = {nome, cargo, salario, data_nascimento, registro_funcionario };
    console.log(funcionario);

    //==> (POST - URL no back-end): http//localhost:300/funcionario
    this.
      http.
        post( `${this.uri}/funcionario`, funcionario).subscribe(res => console.log('Feito'));
  }

  /**
   * Método responsável por listar todos os 'Funcionarios'
   */

  getFuncionarios(): Observable<Funcionario[]>{
    //==> (GET - URL no Back-End): http://localhost:3000/funcionario
    return this
      .http
      .get<Funcionario[]>(`${this.uri}/funcionario`);
  }

  /**
   * Método responsável por editar um 'Funcionario'
   */

  editFuncionario(id: any){
    //==> (PUT - URL no Back-End): http://localhost:3000/funcionario:id
    return this
    .http
    .get(`${this.uri}/funcionario/${id}`);
  }

  /**
   * Método responsável pela ação do botão Update no arquivo 'funcionario-edit.component.html'
   */
  updateFuncionario(nome: any, cargo: any, salario: any, data_nascimento: any, registro_funcionario: any, id:any){
    const funcionario ={
      nome,
      cargo,
      salario,
      data_nascimento,
      registro_funcionario
    };

    this
      .http
      .put(`${this.uri}/funcionario/${id}`,funcionario)
      .subscribe(res => console.log('Done!'));
  }

  /**
   * Método para excluir um Funcionario pelo Id
   */
  deleteFuncionario(id:any){
    //==> (DELETE - URL no Back-End): http://localhost:3000/funcionario:id
    return this
    .http
    .delete(`${this.uri}/funcionario/${id}`);
  }

  
  
}
