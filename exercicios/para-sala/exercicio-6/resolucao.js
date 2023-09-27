function Account(numeroDaConta, numeroDaAgencia, montanteInicial){
    let account = Object.create(Account.prototype);

    account.number = numeroDaConta;
    account.agency = numeroDaAgencia;
    account.amount = montanteInicial

    return account;
}

Account.prototype.credit = function credit(amount){
    let creditLimit = montanteInicial += amount;
    console.log(`Valor de crédito disponível: ${creditLimit}`)
}

Account.prototype.debit = function debit(amount){
    if(montanteInicial >= amount){
        montanteInicial - amount;
        console.log(`Novo saldo disponível: ${montanteInicial}`)
    } else {
        console.log(`Saldo insuficiente para finalizar a transação.`)
    }
    

    let payment = montanteInicial - amount
    console.log(`Valor de débito disponível: ${payment}`)
}

Account.prototype.transferTo = function transferTo(anotherAccount, amount){
    if(montanteInicial >= amount){
        montanteInicial -= amount;
        anotherAccount.amount += amount
        console.log(`Você transferiu ${amount} para ${anotherAccount}. Saldo disponível: ${montanteInicial}`)
    } else {
        throw `Saldo insuficiente para finalizar a transação.`
        //console.log(`Saldo insuficiente para finalizar a transação.`)
    }
}

module.exports = {Account};
