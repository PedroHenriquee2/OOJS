function Pessoa(nome) {
    this.nome = nome;
    let _salario = salario;

    this.retornaSalario = function() {
        return _salario;
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    Pessoa.call(this, nome);
}

const pessoal = new Pessoa("Pedro")
const funcionario = new Funcionario("Pedro", "dev Python", 4000);

console.log(pessoal);
console.log(funcionario);

console.log(funcionario.retornaSalario())
