import Use from "./estudo1.js";

class Admin extends Use {
    constructor(nome, pais, role = 'admin', ativo = true){
        super(nome, pais, role, ativo)
    }
}

const novoAdmin = new Admin ('Dri', 'Brazil')
console.log(novoAdmin)
console.log(novoAdmin.exibirInf())