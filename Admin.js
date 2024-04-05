import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {       
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, vagas) {
        return `Curso de ${nomeCurso} criado com ${vagas} vagas.`
    }

}

const novoAdmin = new Admin('Rodrigo','r@r.com','2024-03-05');
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());

console.log(novoAdmin.criarCurso('JS', 40));