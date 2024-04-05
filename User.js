export default class User {
    //# torna o atributo privado. Nota: Antes era usado o _ 
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

    get nome() {
        return this.#nome
      }
    
      get email() {
        return this.#email
      }
    
      get nascimento() {
        return this.#nascimento
      }
    
      get role() {
        return this.#role
      }
    
      get ativo() {
        return this.#ativo
      }
    
      set nome(novoNome) {
        if (novoNome === '') {
          throw new Error('formato não válido')
        }
        this.#nome = novoNome
      }
    
      exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
      }
}

// const novoUser = new User('Juliana','j@j.com','2024-04-05');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf());