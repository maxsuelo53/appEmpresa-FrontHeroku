/**
 * arquivo: app/interface/funcionario
 * descrição: arquivo responsável pela lógica do CRUD ('Funcionario')
 * author: Maxsuel Oliveira <github: maxsuelo53>
 */

export default class Funcionario{
    
    id_funcionario?: number;
    nome: string = "";
    cargo: string = "";
    salario: number = 0;
    data_nascimento: Date = new Date;
    registro_funcionario: number = 0;

}