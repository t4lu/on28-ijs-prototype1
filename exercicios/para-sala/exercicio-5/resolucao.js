function generateId() {
    const crypto = require('crypto');
    const id = crypto.randomUUID();

    return id;
}

const employeeMethods = {
    
    raiseSalary: function raiseSalary(percent) {
        this.salary += (this.salary * percent);
        console.log(`O novo salário é ${this.salary}`)
    },

    addBenefits: function addBenefits(benefit) {
        this.benefits.push(benefit);
        console.log(`O benefício ${benefit} foi adicionado.`)
    },

    removeBenefits: function removeBenefits(benefit) {
        let index = this.benefits.indexOf(benefit);

        if (index === -1) {
            console.log("O benefício inserido é inválido.")
        } else {
            this.benefits = this.benefits.filter(currentBenefit => currentBenefit !== benefit);
            console.log(`O benefício ${benefit} foi removido.`);
        }
    },
    listBenefits: function listBenefits(){
        console.log(`Os benefícios desse funcionário são: ${this.benefits}`)
    }

}

function Employee(firstName, lastName, salary){
    let employee = Object.create(employeeMethods); //Essa função "herda" e atribui todos os métodos implementados na função employee methods.
    //o objeto criado pode utilizar esses métodos sem, necessáriamente serem reaplicados na função Employee

    employee.id = generateId();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefits = [];

    return employee;
}

module.exports = {Employee};