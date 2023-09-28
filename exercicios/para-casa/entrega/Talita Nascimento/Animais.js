//Parte 1 -> implementação das funções construtoras de cada objeto, e suas propriedades.

function Gato(nomeDoGato, idadeDoGato, corDoGato) {
    this.nomeDoGato = nomeDoGato;
    this.idadeDoGato = idadeDoGato;
    this.corDoGato = corDoGato;
    this.ehCastrado = MetodosDosAnimais.castrarAnimal;
    this.historicoDoGato = new HistoricoMedicoDoAnimal();

}

Gato.prototype.miar = function miar() {
    console.log(`Miau! Miau! Miau!`)
}

function Cachorro(nomeDoCachorro, idadeDoCachorro, corDoCachorro, racaDoCachorro) {
    this.nomeDoCachorro = nomeDoCachorro;
    this.idadeDoCachorro = idadeDoCachorro;
    this.corDoCachorro = corDoCachorro;
    this.ehCastrado = MetodosDosAnimais.castrarAnimal;
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
    this.ehAdulto = MetodosDosAnimais.ehAdulto;
    this.historicoDoAnimal = new HistoricoMedicoDoAnimal();
}

function HistoricoMedicoDoAnimal() {
    this.datasDasConsultas = [].reverse;
    this.nomesDasVacinas = [];
    this.procedimentosSubmetidos = [];

    return `consultas: ${this.datasDasConsultas}\nvacinas: ${this.nomesDasVacinas} \nprocedimentos: ${this.procedimentosSubmetidos}`
}

//Parte 2 -> implementação dos métodos que são pertinentes a todos os animais
const MetodosDosAnimais = {
    vacinar: function vacinar(nomeDaVacina) {
        let vacinasRecebidas = this.nomesDasVacinas;

        //verificar se o parametro de vacinas está vazio
        if (nomeDaVacina == "") {
            console.log("Não há histórico de vacinas.")
        } else {
            vacinasRecebidas.push(nomeDaVacina)
            console.log(`Vacina "${nomeDaVacina}" adicionada ao histórico!\nVacinas recebidas: ${vacinasRecebidas}`)
        }
    },

    consultar: function consultar(dataDaConsulta) {
        let primeiraConsulta = this.datasDasConsultas.indexOf(dataDaConsulta);
        let consultasRealizadas = this.datasDasConsultas

        consultasRealizadas.push(dataDaConsulta)
        console.log(`Data ${dataDaConsulta} adicionada ao histórico!`)

        //checar se é a primeira consulta
        if (primeiraConsulta === -1) {
            console.log(`Não existem datas anteriores a ${primeiraConsulta}.`)
        } else {
            console.log(`Consultas realizadas: ${this.datasDasConsultas}`)
        }
    },

    realizarProcedimento: function realizarProcedimento(tipoDeProcedimento, motivoDoProcedimento) {
        let procedimentosSubmetidos = this.procedimentosSubmetidos;

        procedimentosSubmetidos.push(tipoDeProcedimento, motivoDoProcedimento);
        console.log(`Tipo de procedimento realizado: ${tipoDeProcedimento}. Motivo do procedimento: ${motivoDoProcedimento}.`)
    },

    castrarAnimal: function castrarAnimal(animalCastrado) {
        if (animalCastrado == true) {
            console.log("É um animal castrado.")
        } else {
            console.log("Não é um animal castrado")
        }
    },
 
    ehAdulto: function ehAdulto(idadeDoAnimal){
        let especieDoAnimal = this.especieDoAnimal

        if(especieDoAnimal === "Hamster" && idadeDoAnimal >= 2 || 
        especieDoAnimal === "Papagaio" && idadeDoAnimal >= 36 ||
        especieDoAnimal === "Calopsita" && idadeDoAnimal >= 18){
            console.log(`É um animal adulto.`)
        } else {
            console.log(`Não é um animal adulto.`)
        }
    }
}

module.exports = { Gato, Cachorro, AnimalExotico, HistoricoMedicoDoAnimal }