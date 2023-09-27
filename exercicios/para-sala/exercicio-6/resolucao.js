function Account(numeroDaConta, numeroDaAgencia, montanteInicial){
    let account = Object.create(Account.prototype);

    account.number = numeroDaConta;
    account.agency = numeroDaAgencia;
    account.amount = montanteInicial

    return account;
}

Account.prototype.credit = function credit(amount){
    this.amount += amount;
    console.log(`Valor de crédito disponível: ${this.amount}`)
}

Account.prototype.debit = function debit(amount){
    if(this.amount >= amount){
        this.amount - amount;
        console.log(`Novo saldo disponível: ${this.amount}`)
    } else {
        console.log(`Saldo insuficiente para finalizar a transação.`)
    }
    

    let payment = this.amount - amount
    console.log(`Valor de débito disponível: ${payment}`)
}

Account.prototype.transferTo = function transferTo(anotherAccount, amount){
    if(this.amount >= amount){
        this.amount -= amount;
        anotherAccount.amount += amount
        console.log(`Você transferiu ${amount} para ${anotherAccount}. Saldo disponível: ${this.amount}`)
    } else {
        throw `Saldo insuficiente para finalizar a transação.`
        //console.log(`Saldo insuficiente para finalizar a transação.`)
    }
}

module.exports = {Account};
