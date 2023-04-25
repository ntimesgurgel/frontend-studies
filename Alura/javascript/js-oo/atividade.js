class ContaBancaria{

    constructor(agencia, numero, tipo, saldo){
        this._agencia = agencia;
        this._numero = numero;
        this._tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        this._saldo = this._saldo - valor;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
    }

}

class ContaCorrente extends ContaBancaria{

    constructor(cartaoDeCredito){
        super(agencia, numero, tipo = 'conta corrente', saldo);
        this._cartaoDeCredito = cartaoDeCredito;
    }
    
}


class ContaPoupanca extends ContaBancaria{

    constructor(cartaoDeCredito){
        super(agencia, numero, tipo = 'conta poupança', saldo);
        this._cartaoDeCredito = cartaoDeCredito;
    }

}

class ContaUniversitaria extends ContaBancaria{

    constructor(cartaoDeCredito){
        super(agencia, numero, tipo = 'conta poupança', saldo);
        this._cartaoDeCredito = cartaoDeCredito;
    }

    sacar(valor){
        if (valor < 500){
            this._saldo = this._saldo - valor;
        } else {
            console.log('nao pode extrair mais que 500 reais');
        }
    }
}