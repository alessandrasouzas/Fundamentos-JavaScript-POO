export default class User {
    //# torna o atributo privado
    #nome
    #nascimento
    #email
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#nascimento = nascimento
        this.#email = email
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    exibirInfos(){
        return `${this.#nome}, ${this.email}`
    }
}

// const novoUser = new User('Juliana','j@j.com','2024-04-05');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf());