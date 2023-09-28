const { Gato, Cachorro, AnimalExotico } = require('./Animais');

const gato = new Gato("Tutu", 24, "branco", true);
console.log(gato);
gato.miar();
gato.historicoDoGato.vacinar("Raiva");
gato.historicoDoGato.consultar('2023-09-27');
gato.historicoDoGato.consultar('2022-09-27');
gato.historicoDoGato.realizarProcedimento("Exame de sangue", "Rotina");

const cachorro = new Cachorro ("Julio", 42, "Preto", false, "SRD");
console.log(cachorro);
cachorro.latir();
cachorro.historicoDoCachorro.vacinar("Raiva");
cachorro.historicoDoCachorro.consultar('2023-09-27');
cachorro.historicoDoCachorro.consultar('2022-09-27');
cachorro.historicoDoCachorro.realizarProcedimento("Exame de urina", "Rotina");

const calopsita = new AnimalExotico("Roberto", 2, "Amarelo e branco", "Calopsita");
console.log(calopsita);
calopsita.historicoDoAnimal.vacinar("");
calopsita.historicoDoAnimal.consultar('2022-09-27');
calopsita.historicoDoAnimal.realizarProcedimento("Exame físico","Asa machucada")
calopsita.ehAdulto(2)

const hamster = new AnimalExotico("Bolinha", 12, "Marrom e branco", "Hamster");
console.log(hamster);
hamster.historicoDoAnimal.vacinar("");
hamster.historicoDoAnimal.consultar('2021-09-27');
hamster.historicoDoAnimal.realizarProcedimento("Exame de fezes", "Alimentação inadequada (engoliu uma pedra)");
hamster.ehAdulto(12)

const papagaio = new AnimalExotico("Loro José", 34, "Verde e amarelo", "Papagaio");
console.log(papagaio)
papagaio.historicoDoAnimal.vacinar("");
papagaio.historicoDoAnimal.consultar('2022-09-27');
papagaio.historicoDoAnimal.realizarProcedimento("Fonoaudiologia", "Está falando pouco");
papagaio.ehAdulto(34)