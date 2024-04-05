const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

user.exibirInfos();

//herança Prototípica: a forma como do js realiza herança
const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!');
    }
}

//1º param: objeto filho, 2º param: objeto mae
Object.setPrototypeOf(admin, user)
admin.criarCurso();
admin.exibirInfos();
