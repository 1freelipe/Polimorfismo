function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        this.verSaldo();
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    return this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c ${this.agencia}/${this.conta} | R$ ${this.saldo}`);
}

const conta = new Conta(2, 15, 1500);

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}
Object.setPrototypeOf(ContaCorrente.prototype, Conta.prototype);

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
Object.setPrototypeOf(ContaPoupanca.prototype, Conta.prototype);

const CC = new ContaCorrente(2, 5, 0, 100)

CC.depositar(10);
CC.sacar(110);
CC.sacar(1);

console.log();

const CP = new ContaPoupanca(5, 9, 0);

CP.depositar(10);
CP.sacar(10);
CP.sacar(1);



