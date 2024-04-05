import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {       
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} passou no curso ${curso}`
    }

}

const novoDocente = new Docente('Marcela','m@m.com','2024-03-05');
console.log(novoDocente);
console.log(novoDocente.aprovaEstudante('Marcela', 'JS'));