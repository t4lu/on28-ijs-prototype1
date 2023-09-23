let employee1 = {};

employee1.id = 1,
employee1.firstName = 'talu',
employee1.lastName = '',
employee1.salary = 5000
employee1.raiseSalary = function raiseSalary(percent){
    this.salary += (this.salary * percent)
    return `O novo salário é R$${this.salary}`
}

let employee2 = {};

employee2.id = 2,
employee2.firstName = 'talita',
employee2.lastName = '',
employee2.salary = 5000
employee2.raiseSalary = function raiseSalary(percent){
    this.salary += (this.salary * percent)
    return `O novo salário é R$${this.salary}`
}