function generateId() {
    const crypto = require('crypto');
    const id = crypto.randomUUID();

    return id;
}

const employeeMethods = { //implementação do objeto, que recebe todos os métodos pertinentes e que poderão ser invocados.
    
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

        if (index === -1) { //se o benefício não existe no array, retornará a mensagem no console.
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
    let employee = {}

    employee.id = generateId();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefits = [];

    employee.raiseSalary = employeeMethods.raiseSalary;
    employee.addBenefits = employeeMethods.addBenefits;
    employee.removeBenefits = employeeMethods.removeBenefits;
    employee.listBenefits = employeeMethods.listBenefits;

    return employee;
}

module.exports = {Employee};