const { Employee } = require('./resolucao'); //importação do arquivo que tem a funçao construtora para o objeto Employee

const employee1 = Employee('Luara', 'Kerlen', 10000); //manipulação do objeto - é possivel criar diferentes objetos, apenas inserindo os dados de cada parâmetro, em vez de refazer a função varias vezes.
console.log(employee1);
console.log(employee1.raiseSalary(10));

const employee2 = Employee('Maria', 'Santos', 20000);
console.log(employee2);
console.log(employee2.raiseSalary(5));
/* no console, é exibido o resultado do objeto

{
  id: '70a5f254-9e14-4263-bd7e-033152af976c',
  firstName: 'Maria',
  lastName: 'Santos',
  salary: 20000,
  raiseSalary: [Function: raiseSalary]
}


*/
