function Account(numeroDaConta, numeroDaAgencia, montanteInicial, numeroDoBanco) {

    this.number = numeroDaConta;
    this.agency = numeroDaAgencia;
    this.amount = montanteInicial;
    this.bankNumber = numeroDoBanco
}

Account.prototype.credit = function credit(amount) {
    this.amount += amount;
    console.log(`Valor de crédito disponível: ${this.amount}`)
}

Account.prototype.debit = function debit(amount) {
    if (this.amount >= amount) {
        this.amount - amount;
        console.log(`Novo saldo disponível: ${this.amount}`)
    } else {
        console.log(`Saldo insuficiente para finalizar a transação.`)
    }


    let payment = this.amount - amount
    console.log(`Valor de débito disponível: ${payment}`)
}

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
    let taxaBancaria = 0;

    if (this.bankNumber !== anotherAccount.bankNumber) {
        taxaBancaria = 0.05;
        console.log(`Esta transação inclui acréscimo de ${taxaBancaria}% de taxa bancária.`)
    }

    const amountToDebit = amount + (amount * taxaBancaria);

    if (this.amount >= amountToDebit) {
        this.amount -= amountToDebit;
        anotherAccount.amount += amount;
        console.log(`Você transferiu ${amount} para ${anotherAccount}. Saldo disponível: ${this.amount}`)
    } else {
        throw `Saldo insuficiente para finalizar a transação.`
    }
}

Account.prototype.closeAccount = function closeAccount() {
    if (this.amount === 0) {
        this.agency = undefined;
        this.number = undefined;
        this.bankNumber = undefined;
        this.amount = undefined

        console.log(`Conta encerrada com sucesso!`)
    } else {
        console.log(`Não é possível encerrar sua conta. Saldo disponível: ${this.amount}`)
    }

}

//const account1 = new Account()
//console.log(account1)

module.exports = { Account };
