class Conta{
    
    constructor(numero, nome, cpf) {
        conta.this = [];
        numero.this = numero;
        nome.this = nome;
        cpf.this = cpf;
    }

    cadastra(numero, nome, cpf) {
        numero.this = numero;
        nome.this = nome;
        cpf.this = cpf;
    }
    mostraCliente() {
        return "Numero: "+numero.this+"\nNome: "+nome.this+"\nCPF: "+cpf.this;
    }
 }
 
 class ContaCorrente extends Conta{
    constructor(saldocc, entradacc, saidacc) {
        saldocc.this = saldocc;
        entradacc.this = entradacc;
        saidacc.this = saidacc;
        saldocc.this = entradacc.this - saidacc.this;
        conta.push(this);
    }
    deposito(entradacc) {
        entradacc.this += entradacc;
    }

    
    saque(saidacc) {
        saidacc.this -= entradacc;
    }

    mostraSaldo(saldocc) {
        saldocc.this = saldocc;
        return "Seu saldo é de:" + saldocc.this;
    }
 }

 class ContaPoupanca extends Conta{
    constructor(saldopp, entradapp, saidapp) {
        
        saldopp.this = saldopp;
        entradapp.this = entradapp;
        saidapp.this = saidapp;
        saldopp.this = entradapp.this - saidapp.this;
        conta.push(this);
    }
    deposito(entradapp) {
        entradapp.this = entradapp;
    }

    saque(saidapp) {
        saidapp.this = saidapp;
    }

    mostraSaldo(saldopp) {
        saldopp.this = saldopp;
        return "Seu saldo é de:" + saldopp.this;
    }
 }

let cadastraCCEl = document.querySelector("#cadastraCC");
let cadastraCC = document.querySelector("#cadastro");
let depositoCCEl = document.querySelector("#depositoCC");
let depositarCC = document.querySelector("#depositar");
let saqueCCEl = document.querySelector("#saqueCC");
let saqueCC = document.querySelector("#sacar");
let cadastraPPEl = document.querySelector("#cadastraPP");
let cadastraPP = document.querySelector("#cadastro");
let depositoPPEl = document.querySelector("#depositoPP");
let depositarPP = document.querySelector("#depositar");
let saquePPEl = document.querySelector("#saquePP");
let saquePP = document.querySelector("#sacar");
let saldoPPEl = document.querySelector("#saldoPP");
let saldoCCEl = document.querySelector("#saldoCC");
let nomeEl = document.querySelector("#iNome");
let cpfEl = document.querySelector("#iCPF");
let valorDEl = document.querySelector("#valorD");
let myConta = new Conta(1, nameEl.value, cpfEl.value);

cadastraCCEl.addEventListener('mousedown', (e) => {
    cadastraCC.style.display = (cadastraCC.style.display === 'inherit')? 'none': 'inherit';
    if(cadastraCC.style.display === 'inherit')
        myConta.cadastra(1, nomeEl.value, cpfEl.value);
});
cadastraPPEl.addEventListener('mousedown', (e) => {
    cadastraPP.style.display = (cadastraPP.style.display === 'inherit')? 'none': 'inherit';
    if(cadastraPP.style.display === 'inherit')
        myConta.cadastra(1, nomeEl.value, cpfEl.value);
});

depositoCCEl.addEventListener('mousedown', (e) => {
    depositarCC.style.display = (depositarCC.style.display === 'inherit')? 'none': 'inherit';
    if(depositarPP.style.display === 'inherit')

});
depositoPPEl.addEventListener('mousedown', (e) => {
    depositarPP.style.display = (depositarPP.style.display === 'inherit')? 'none': 'inherit';
    if(depositarPP.style.display === 'inherit')
        
});

saqueCCEl.addEventListener('mousedown', (e) => {
    saqueCC.style.display = (saqueCC.style.display === 'inherit')? 'none': 'inherit';
});
saquePPEl.addEventListener('mousedown', (e) => {
    saquePP.style.display = (saquePP.style.display === 'inherit')? 'none': 'inherit';
});

saldoPPEl.addEventListener('mousedown', (e) => {
    alert('funfou');
});
saldoCCEl.addEventListener('mousedown', (e) => {
    alert('funfou');
});
