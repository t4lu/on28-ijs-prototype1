function Gato(nomeDoGato, idadeDoGato, corDoGato, ehCastrado) {
    this.nomeDoGato = nomeDoGato;
    this.idadeDoGato = idadeDoGato;
    this.corDoGato = corDoGato;
    this.ehCastrado = ehCastrado;
    this.historicoDoGato = new HistoricoMedicoDoAnimal();

}

Gato.prototype.miar = function miar() {
    console.log(`Miau! Miau! Miau!`)
}

function Cachorro(nomeDoCachorro, idadeDoCachorro, corDoCachorro, ehCastrado, racaDoCachorro) {
    this.nomeDoCachorro = nomeDoCachorro;
    this.idadeDoCachorro = idadeDoCachorro;
    this.corDoCachorro = corDoCachorro;
    this.ehCastrado = ehCastrado;
    this.racaDoCachorro = racaDoCachorro;
    this.historicoDoCachorro = new HistoricoMedicoDoAnimal();
}

Cachorro.prototype.latir = function latir() {
    console.log(`Au! Au! Au!`)
}

function AnimalExotico(nomeDoAnimal, idadeDoAnimal, corDoAnimal, especieDoAnimal) {
    this.nomeDoAnimal = nomeDoAnimal;
    this.idadeDoAnimal = idadeDoAnimal;
    this.corDoAnimal = corDoAnimal;
    this.especieDoAnimal = especieDoAnimal;
    this.historicoDoAnimal = new HistoricoMedicoDoAnimal();
}

AnimalExotico.prototype.ehAdulto = function ehAdulto(idadeDoAnimal) {
    let especieDoAnimal = this.especieDoAnimal

    if (especieDoAnimal === "Hamster" && idadeDoAnimal >= 2 ||
        especieDoAnimal === "Papagaio" && idadeDoAnimal >= 36 ||
        especieDoAnimal === "Calopsita" && idadeDoAnimal >= 18) {
        console.log(`É um animal adulto.`)
    } else {
        console.log(`Não é um animal adulto.`)
    }
}

function HistoricoMedicoDoAnimal() {
    this.datasDasConsultas = [];
    this.nomesDasVacinas = [];
    this.procedimentosSubmetidos = [];
}

HistoricoMedicoDoAnimal.prototype.vacinar = function vacinar(nomeDaVacina) {
    let vacinasRecebidas = this.nomesDasVacinas;

    //verificar se o parametro de vacinas está vazio
    if (nomeDaVacina == "") {
        console.log("Não há histórico de vacinas.")
    } else {
        vacinasRecebidas.push(nomeDaVacina)
        console.log(`Vacina "${nomeDaVacina}" adicionada ao histórico!\nVacinas recebidas: ${vacinasRecebidas}`)
    }
},

HistoricoMedicoDoAnimal.prototype.consultar = function consultar(dataDaConsulta) {
        let consultasRealizadas = this.datasDasConsultas

        consultasRealizadas.push(dataDaConsulta)
        console.log(`Data ${dataDaConsulta} adicionada ao histórico!`)
    },

HistoricoMedicoDoAnimal.prototype.realizarProcedimento = function realizarProcedimento(tipoDeProcedimento, motivoDoProcedimento) {
        let procedimentosSubmetidos = this.procedimentosSubmetidos;

        procedimentosSubmetidos.push(tipoDeProcedimento, motivoDoProcedimento);
        console.log(`Tipo de procedimento realizado: ${tipoDeProcedimento}. Motivo do procedimento: ${motivoDoProcedimento}.`)
    }

module.exports = { Gato, Cachorro, AnimalExotico, HistoricoMedicoDoAnimal }