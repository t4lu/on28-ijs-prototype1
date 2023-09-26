function raiseSalary(percent){
    this.salary += (this.salary * percent)
    console.log(`O novo salário é R$${this.salary}`)
}

let employee1 = {};

employee1.id = 1,
employee1.firstName = 'talu',
employee1.lastName = '',
employee1.salary = 5000
employee1.raiseSalary = raiseSalary

let employee2 = {};

employee2.id = 2,
employee2.firstName = 'talita',
employee2.lastName = '',
employee2.salary = 57000
employee2.raiseSalary = raiseSalary

employee1.raiseSalary(0.1)
employee2.raiseSalary(0.5)