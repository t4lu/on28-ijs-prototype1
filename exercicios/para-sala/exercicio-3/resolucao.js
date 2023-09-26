function generateId() {
  const crypto = require('crypto');
  const id = crypto.randomUUID();

  return id;
}

function raiseSalary(percent) {
  this.salary += (this.salary * percent);
  console.log(`O novo salário é R$ ${this.salary}`)
}

function Employee(firstName, lastName, salary) {
  let employee = {}

  employee.id = generateId();
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.raiseSalary = raiseSalary;

  employee.benefits = [] //implementa o array de beneficios como uma propriedade para o objeto Employee
  employee.addBenefits = addBenefits; //implementa o método de adicionar beneficio recebido por parametro
  employee.removeBenefits = removeBenefits
  employee.listBenefits = listBenefits

  return employee;
}

function addBenefits(benefit) {
  this.benefits.push(benefit)
  console.log(`O benefício ${benefit} foi adicionado!`)
}

function removeBenefits(benefit) {
  for (let i = 0; i < this.benefits.length; i++) { //fará a análise do tamanho do array
    
    if (this.benefits[i] == benefit) {
      this.benefits.splice(i, 1)
      console.log(`O benefício ${benefit} foi removido.`)
    } //analisa se o valor na posição do array benefits é igual ao parametro benefit, e o remove.
  }
  console.log(`Benefícios disponíveis: ${this.benefits}`)
}

function listBenefits() {
  console.log(`Benefícios disponíveis: ${this.benefits}`)
}

module.exports = { Employee }