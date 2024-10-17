const pcDoPedro = {
    processador: 'Ryzen 5 5600',
    placaMae: 'B550',
    memoria: 'DDR4',
    gabinete: 'ATX',
    ligar: function() {
        console.log("jogar");
    }
}

const pcDoJoao = {
    processador: 'Ryzen 7 5800',
    placaMae: 'X570',
    memoria: 'DDR4',
    gabinete: 'ATX',
    ligar: function() {
        console.log("joga");
    }
}

function Pc(processador, placaMae, memoria, gabinete) {
    this.processador = processador;
    this.placaMae = placaMae;
    this.memoria = memoria;
    this.gabinete = gabinete;
    this.ligar = function() {
        console.log("ligar");
    }
}

const pcDoPedro2 = new Pc("Ryzen 5 5600", "B550", "DDR4", "ATX");
const pcDoJoao2 = new Pc("Ryzen 7 5800", "X570", "DDR4", "ATX");

console.log(pcDoPedro2);
console.log(pcDoJoao2);

const nome = "Pedro"
const idade = 22
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log(typeof pcDoPedro2);

console.log(pcDoPedro2 instanceof Pc)
console.log(conhecimentos instanceof Array)
console.log(pessoa instanceof Object)