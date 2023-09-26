function generateId() {
    const crypto = require('crypto');//implementa a  cuja função é criar e randomizar o ID
    const id = crypto.randomUUID();
  
    return id;
  }
  
  function raiseSalary(percent) {
    this.salary += (this.salary * percent);
    console.log(`O novo salário é R$ ${this.salary}`)
  }

  //implementação da função construtora: recebe os atributos do objeto como parâmetro (nome, sobrenome, salário)
  
  function Employee(firstName, lastName, salary) {
    let employee = {}
  
    employee.id = generateId();//invoca a biblioteca importada na função generateId
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
  
    employee.raiseSalary = raiseSalary;
  
    return employee;
  }

  //teste local - instancia o objeto e invoca o método raiseSalary
  const employee = new Employee("talu", "santos", 5000)
  employee.raiseSalary(0.1)
  
  module.exports = { Employee }