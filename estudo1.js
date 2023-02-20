const user = {
    nome: "Augusto",
    email: "a@f.jp",
    nascimento: "1991/07/04",
    role: "estudante",
    ativo: true,

    exibirInfos: function(){
        console.log(this.nome, this.email)
    }

}

// user.exibirInfos()

// const exibir = function(){
//     console.log(this.nascimento)
// }
// const exibirNome = exibir.bind(user) //bind serve para contextos

// exibir()
// exibirNome()

const admin = {
    nome: "Dri",
    email: "A@a.jp",
    role: "Admin",

    criarCurso(){
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()


// uso do new 

function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfor = function() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Gusto','g@f.com')
// console.log(novoUser.exibirInfor())

function Admin(role){
    User.call(this, 'Gusto', 'G@F.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')

console.log(novoUser.exibirInfor())
console.log(novoUser.role)

const used = {
    init: function(nome, pais){
        this.nome = nome
        this.pais = pais
    },
    exibirInfo: function(){
        return this.nome
    }
}

const velhoUsed = Object.create(used)
velhoUsed.init('Ge', 'Brazil')
console.log(velhoUsed.exibirInfo())

// console.log(velhoUsed.exibirInfo('Ge'))
// console.log(user.isPrototypeOf(velhoUsed))


// class Use {
//     constructor(nome, pais, role, ativo = true){
//         this.nome = nome
//         this.pais = pais
//         this.role = role || 'estudante'
//         this.ativo = ativo
//     }

//     exibirInf(){
//         return `${this.nome}, ${this.pais}`
//     }
// }

// const novoUse = new Use ('Gel', 'Brazil')
// console.log(novoUse)
// console.log(novoUse.exibirInf())

// console.log(Use.prototype.isPrototypeOf(novoUse))


export default class Use {
    constructor(nome, pais, role, ativo = true){
        this.nome = nome
        this.pais = pais
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInf(){
        return `${this.nome}, ${this.pais}`
    }
}

