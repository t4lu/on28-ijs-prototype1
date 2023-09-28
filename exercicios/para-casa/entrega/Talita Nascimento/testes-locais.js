const { Gato, AnimalExotico } = require('./Animais');
/*
const gato = new Gato("Tutu", 24, "branco")
console.log(gato)
gato.miar()
console.log(gato.ehCastrado(true))
*/

const animalExotico = new AnimalExotico('Roberto', 34, 'marrom', 'Papagaio')
console.log(animalExotico)
animalExotico.ehAdulto(34)