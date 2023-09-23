function generateId() {
    const crypto = require('crypto');//implementa uma biblioteca
    const id = crypto.randomUUID();
  
    return id;
  }
  
  function raiseSalary(percent) {
    this.salary += (this.salary * percent);
    console.log(`O novo salário é R$ ${this.salary}`)
  }
  
  function Employee(firstName, lastName, salary) {
    let employee = {}
  
    employee.id = generateId();//invoca a biblioteca
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
  
    employee.raiseSalary = raiseSalary;
  
    return employee;
  }
  
  module.exports = { Employee }