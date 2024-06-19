/*9. Ler um array com 10 nomes de pessoas, após pedir que o usuário digite um nome qualquer de pessoa. Escrever a mensagem “ACHEI”, se o nome estiver armazenado na tupla ou “NÃO ACHEI” caso contrário.*/

const ler = require('readline-sync');

let nomes = [];

for (let i = 1; i < 6; i++) {
    let nome = ler.question(i+". Informe um nome: ").toLowerCase();
    nomes.push(nome);
}

busca = ler.question("Informe um nome para busca: ").toLowerCase();

let x = nomes.indexOf(busca);

if (x>=0) {
    console.log(`nome ${busca} Encontrado!`);
} else {
    console.log(`nome ${busca} NÂO Encontrado!`);
}